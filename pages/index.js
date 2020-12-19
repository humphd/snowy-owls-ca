import Head from 'next/head';
import Essay from '../components/Essay';
import { ScrollableLayout, siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <ScrollableLayout scrollToTop>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Essay />
    </ScrollableLayout>
  );
}
