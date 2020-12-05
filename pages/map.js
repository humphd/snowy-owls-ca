import Head from 'next/head';
import useRecent from '../src/hooks/use-recent';
import dynamic from 'next/dynamic';
import Layout, { siteTitle } from '../components/Layout';
import NoSightings from '../components/NoSightings';

// Leaflet can't handle SSR
const DynamicMap = dynamic(
  () => import('../components/Map/index.js'),
  // todo loading()...
  { ssr: false }
);

export default function Map() {
  const { observations, bounds } = useRecent();

  return (
    <Layout title="Map" includeRegion>
      <Head>
        <title>{`${siteTitle} | Map`}</title>
      </Head>

      {observations && observations.length ? (
        <DynamicMap observations={observations} bounds={bounds} />
      ) : (
        <NoSightings />
      )}
    </Layout>
  );
}
