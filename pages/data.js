import Head from 'next/head';
import useRecent from '../src/hooks/use-recent';
import Layout, { siteTitle } from '../components/Layout';
import MapWithTable from '../components/MapWithTable';

export default function Data() {
  const { observations, bounds, regionName } = useRecent();

  if (!(observations && bounds)) {
    return null;
  }

  return (
    <Layout title={`Data: ${regionName}`}>
      <Head>
        <title>{`${siteTitle} | Data: ${regionName}`}</title>
      </Head>

      <MapWithTable observations={observations} location={location} bounds={bounds} />
    </Layout>
  );
}
