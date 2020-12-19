import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO() {
  // Prefer production for canonical URLs
  const baseUrl = 'https://www.snowyowls.ca';
  const { pathname } = useRouter();
  const canonicalUrl = `${baseUrl}${pathname}`;

  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
