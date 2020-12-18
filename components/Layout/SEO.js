import Head from 'next/head';
import { useRouter } from 'next/router';

export const siteTitle = 'SnowyOwls.ca';

export default function SEO() {
  const description = 'Helping you find Snowy Owls across Canada';
  const imageUrl = 'https://www.snowyowls.ca/owls/on-the-fence/800.jpg';
  const url = 'https://www.snowyowls.ca';
  // Prefer production for canonical URLs
  const { pathname } = useRouter();
  const canonicalURl = `${url}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalURl} />

      <meta name="description" content={description} />
      <meta name="keywords" content="snowy owl, canada, bird" />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Snowy Owl on fence post" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="theme-color" content="#343a40" />
    </Head>
  );
}
