import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const ignore = () => {};

    // Respecting privacy (only count page views without user data),
    // keep track of simple page view counts when users switch pages
    const count = (url) => {
      console.log('count', url);
      fetch('/analytics', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      }).then(ignore, ignore);
    };

    const pathname = router.pathname || '/';
    count(pathname);

    const onRouteChange = (url) => count(url);
    router.events.on('routeChangeStart', onRouteChange);

    return () => {
      router.events.off('routeChangeStart', onRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({}),
};
