import Head from 'next/head';
import Loading from '../components/Loading';
import Layout, { siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} | About`}</title>
      </Head>

      <Loading />
    </Layout>
  );
}
