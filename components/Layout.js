import PropTypes from 'prop-types';
import Head from 'next/head';
import Navigation from '../components/Navigation';

import styles from './Layout.module.css';

export const siteTitle = 'SnowyOwls.ca';

export default function Layout({ children, title, includeRegion }) {
  const description = 'Tracking Snow Owls Across Canada';

  return (
    <section className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/owls/on-the-fence/medium.jpg" />
        <meta property="og:url" content="https://snowyowls.ca" />

        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/owls/on-the-fence/medium.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Snowy Owl on fence post" />
      </Head>

      <Navigation
        className={styles.navigation}
        title={title}
        includeRegion={includeRegion}
      ></Navigation>
      <main className={styles.main}>{children}</main>
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  includeRegion: PropTypes.bool,
};
