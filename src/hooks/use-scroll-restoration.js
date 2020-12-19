// Next.js doesn't seem to know how to do scroll restoration properly.
// This isn't perfect, but it's something. Modified version of
// https://github.com/vercel/next.js/issues/3303#issuecomment-628400930
import { useEffect } from 'react';

import Router from 'next/router';

function getScrollInfo() {
  const docElem = document.documentElement;
  return {
    // How far down we are currently scrolled
    scrollTop: docElem.scrollTop,
    // The total scroll height
    scrollHeight: docElem.scrollHeight,
    // The viewport height
    innerHeight: window.innerHeight,
  };
}

// HACK: adjust scrollTop to deal with images that haven't finished loading yet.
// We know what the scrollHeight *will* be (or, was when we recorded it), and
// since we know that things are basically the same (window.innerHeight is same),
// we can adjust now for the difference, instead of scrolling too far.
function adjustHeight(top, height) {
  const { scrollHeight } = getScrollInfo();
  const diff = height - scrollHeight;
  if (diff) {
    return top - diff;
  }
  return top;
}

function saveScroll(url) {
  const scrollInfo = getScrollInfo();
  sessionStorage.setItem(url, JSON.stringify(scrollInfo));
}

function restoreScroll(url) {
  try {
    const scrollInfo = JSON.parse(sessionStorage.getItem(url));
    if (!scrollInfo) {
      return;
    }
    // Bail if the window has changed size since we recorded the scroll position
    if (window.innerHeight !== scrollInfo.innerHeight) {
      return;
    }

    const top = adjustHeight(scrollInfo.scrollTop, scrollInfo.scrollHeight);
    window.requestAnimationFrame(() => window.scrollTo(0, top));
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
    restoreScroll(router.pathname);

    const onBeforeUnload = (event) => {
      saveScroll(router.pathname);
      delete event['returnValue'];
    };

    const onRouteChangeStart = () => {
      saveScroll(router.pathname);
    };

    const onRouteChangeComplete = (url) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false;
        restoreScroll(url);
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
