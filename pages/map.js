import PropTypes from 'prop-types';
import Head from 'next/head';
import useRecent from '../src/hooks/use-recent';
import dynamic from 'next/dynamic';
import { FullScreenLayout, siteTitle } from '../components/Layout';
import Loading from '../components/Loading';
import NoSightings from '../components/NoSightings';

// Leaflet can't handle SSR
const DynamicMap = dynamic(() => import('../components/Map/index.js'), {
  loading: function loading() {
    return <Loading />;
  },
  ssr: false,
});

function MapPageBase({ children }) {
  return (
    <FullScreenLayout title="Map" includeRegion>
      <Head>
        <title>{`${siteTitle} | Map`}</title>
      </Head>
      {children}
    </FullScreenLayout>
  );
}
MapPageBase.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Map() {
  // TODO: deal with error case
  const { observations, bounds, isLoading, error } = useRecent();

  if (error) {
    return (
      <MapPageBase>
        <NoSightings error />
      </MapPageBase>
    );
  }

  if (isLoading || !observations) {
    return (
      <MapPageBase>
        <Loading />
      </MapPageBase>
    );
  }

  return (
    <MapPageBase>
      {observations.length === 0 ? (
        <NoSightings />
      ) : (
        <DynamicMap observations={observations} bounds={bounds} />
      )}
    </MapPageBase>
  );
}
