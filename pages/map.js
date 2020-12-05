import Head from 'next/head';
import useRecent from '../src/hooks/use-recent';
import dynamic from 'next/dynamic';
import Layout, { siteTitle } from '../components/Layout';

// Leaflet can't handle SSR
const DynamicMap = dynamic(
  () => import('../components/Map/index.js'),
  // todo loading()...
  { ssr: false }
);

export default function Map() {
  const { observations, bounds, regionName } = useRecent();

  if (!(observations && bounds)) {
    return null;
  }

  return (
    <Layout title={`Map: ${regionName}`}>
      <Head>
        <title>{`${siteTitle} | Map: ${regionName}`}</title>
      </Head>

      <DynamicMap observations={observations} bounds={bounds} />
    </Layout>
  );
}
