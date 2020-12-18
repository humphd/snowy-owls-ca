// Next.js doesn't seem to know how to do scroll restoration properly.
// This isn't perfect, but it's something.
// Modified version of https://github.com/vercel/next.js/issues/3303#issuecomment-628400930
import { useEffect } from 'react';

import Router from 'next/router';

function getScrollTop() {
  return document.documentElement.scrollTop;
}

function saveScrollTop(url) {
  const scrollPos = { top: getScrollTop() };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
}

function restoreScrollTop(url) {
  try {
    const scrollPos = JSON.parse(sessionStorage.getItem(url));
    if (scrollPos) {
      window.requestAnimationFrame(() => window.scrollTo(0, scrollPos.top));
    }
  } catch (err) {
    // We tried, let the scrollbar fall where it may!
  }
}

export default function useScrollRestoration(router) {
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return;
    }

    let shouldScrollRestore = false;
    window.history.scrollRestoration = 'manual';
    restoreScrollTop(router.pathname);

    const onBeforeUnload = (event) => {
      saveScrollTop(router.pathname);
      delete event['returnValue'];
    };

    const onRouteChangeStart = () => {
      saveScrollTop(router.pathname);
    };

    const onRouteChangeComplete = (url) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false;
        restoreScrollTop(url);
      }
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    Router.events.on('routeChangeStart', onRouteChangeStart);
    Router.events.on('routeChangeComplete', onRouteChangeComplete);
    Router.beforePopState(() => {
      shouldScrollRestore = true;
      return true;
    });

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      Router.events.off('routeChangeStart', onRouteChangeStart);
      Router.events.off('routeChangeComplete', onRouteChangeComplete);
      Router.beforePopState(() => true);
    };
  }, [router]);
}
