import PropTypes from 'prop-types';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Container from 'react-bootstrap/Container';

import styles from './Layout.module.css';

export const siteTitle = 'SnowyOwls.ca';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tracking Snow Owls Across Canada" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navigation className={styles.navigation}></Navigation>

      <main className={styles.main}>
        <Container className={styles.content}>{children}</Container>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
};
