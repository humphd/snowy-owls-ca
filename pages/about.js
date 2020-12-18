import Head from 'next/head';
import ProjectInfo from '../components/ProjectInfo';
import { ScrollableLayout, siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <ScrollableLayout title="About">
      <Head>
        <title>{`${siteTitle} | About`}</title>
      </Head>

      <ProjectInfo />
    </ScrollableLayout>
  );
}
