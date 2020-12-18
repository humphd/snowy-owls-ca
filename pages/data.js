import PropTypes from 'prop-types';
import Head from 'next/head';
import useRecent from '../src/hooks/use-recent';
import { FullScreenLayout, siteTitle } from '../components/Layout';
import Loading from '../components/Loading';
import NoSightings from '../components/NoSightings';
import MapWithTable from '../components/MapWithTable';

function DataPageBase({ children }) {
  return (
    <FullScreenLayout title="Data" includeRegion>
      <Head>
        <title>{`${siteTitle} | Data`}</title>
      </Head>
      {children}
    </FullScreenLayout>
  );
}
DataPageBase.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Data() {
  // TODO: Deal with error case
  const { observations, bounds, isLoading, error } = useRecent();

  if (error) {
    return (
      <DataPageBase>
        <NoSightings error />
      </DataPageBase>
    );
  }

  if (error || isLoading || !observations) {
    return (
      <DataPageBase>
        <Loading />
      </DataPageBase>
    );
  }

  return (
    <DataPageBase>
      {observations.length === 0 ? (
        <NoSightings />
      ) : (
        <MapWithTable observations={observations} bounds={bounds} />
      )}
    </DataPageBase>
  );
}
