import Head from 'next/head';
import ProjectInfo from '../components/ProjectInfo';
import Layout, { siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <Layout title="About">
      <Head>
        <title>{`${siteTitle} | About`}</title>
      </Head>

      <ProjectInfo />
    </Layout>
  );
}
