import Head from 'next/head';
import Essay from '../components/Essay';
import Layout, { siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Essay />
    </Layout>
  );
}
