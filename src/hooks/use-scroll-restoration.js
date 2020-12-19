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

function saveScroll(url) {
  const scrollInfo = getScrollInfo();
  sessionStorage.setItem(url, JSON.stringify(scrollInfo));
}

/**
 * HACK: The idea here is to get back the scrollInfo for a given pathname (e.g., / or /about)
 * and use it to compare to the current state of the window.  We expect the window's
 * height to be the same as it was when we recorded it (e.g., resizing the window will
 * mean we don't bother trying to scroll).  We also need the scrollHeight to be the same
 * as it was, which implies that images have loaded and occupy the correct amount of space.
 * We wait for the page to get to the desired scrollHeight before we try to scroll.  This might
 * happen immediately, or might require a few ticks.  Eventually we give up if it hasn't
 * ever gotten to the expected height.
 */
function restoreScroll(url) {
  try {
    const scrollInfo = JSON.parse(sessionStorage.getItem(url));
    // Bail if we have no saved scroll info in the session.
    if (!scrollInfo) {
      return;
    }

    // Bail if the window has changed size since we recorded the scroll position.
    if (window.innerHeight !== scrollInfo.innerHeight) {
      return;
    }

    // If the current scrollHeight doesn't match what we expect, wait until it does.
    let tries = 75;

    const scroll = () => {
      // Get the current scrollHeight
      const { scrollHeight } = getScrollInfo();
      // Compare to the one we saw when we recorded scrollTop originally.
      if (scrollHeight === scrollInfo.scrollHeight) {
        // Looks good, scroll to this position when possible.
        window.requestAnimationFrame(() => window.scrollTo(0, scrollInfo.scrollTop));
        return;
      }

      // Don't keep trying forever, but do wait a bit for the images to load (likely from cache).
      if (tries) {
        tries = tries - 1;
        setTimeout(scroll, 5);
      }
    };

    // Here we go, let's try this...
    scroll();
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
