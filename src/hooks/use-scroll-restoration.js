// Based on https://github.com/vercel/next.js/issues/3303#issuecomment-628400930
// Manage scrollTop position between renders of scrollable element.
//
// TODO: Seems to work everywhere except on Firefox, where the scrollTop jumps a bit
// each time.
import { useEffect } from 'react';

import Router from 'next/router';

function getScrollTop(ref) {
  const elem = ref.current;
  if (!elem) {
    return 0;
  }
  return elem.scrollTop;
}

function saveScrollTop(ref, url) {
  const scrollPos = { top: getScrollTop(ref) };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
}

function restoreScrollTop(ref, url) {
  try {
    const scrollPos = JSON.parse(sessionStorage.getItem(url));
    if (scrollPos) {
      const elem = ref.current;
      elem.scrollTop = scrollPos.top;
    }
  } catch (err) {
    // We tried, let the scrollbar fall where it may!
  }
}

export default function useScrollRestoration(ref, router) {
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return;
    }

    let shouldScrollRestore = false;
    window.history.scrollRestoration = 'manual';
    restoreScrollTop(ref, router.pathname);

    const onBeforeUnload = (event) => {
      saveScrollTop(ref, router.pathname);
      delete event['returnValue'];
    };

    const onRouteChangeStart = () => {
      saveScrollTop(ref, router.pathname);
    };

    const onRouteChangeComplete = (url) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false;
        restoreScrollTop(ref, url);
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
