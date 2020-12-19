import Document, { Html, Head, Main, NextScript } from 'next/document';
import { siteTitle } from '../components/Layout';

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    const description = 'Helping you find Snowy Owls across Canada';
    const imageUrl = 'https://www.snowyowls.ca/owls/on-the-fence/800.jpg';
    const url = 'https://www.snowyowls.ca';

    return (
      <Html id="top" lang="en">
        <Head>
          <meta name="description" content={description} />
          <meta name="keywords" content="snowy owl, canada, bird" />

          <meta name="application-name" content={siteTitle} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#343a40" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={url} />

          <meta name="twitter:title" content={siteTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Snowy Owl on fence post" />
          <meta name="twitter:creator" content="@humphd" />
          <meta name="twitter:url" content={url} />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
