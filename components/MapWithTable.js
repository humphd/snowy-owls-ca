import PropTypes from 'prop-types';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import dynamic from 'next/dynamic';

import Table from './Table';

import styles from './MapWithTable.module.css';

// Leaflet can't handle SSR
const DynamicMap = dynamic(
  () => import('./Map/index.js'),
  // TODO: add loading() ...
  { ssr: false }
);

export default function MapWithTable({ observations, bounds }) {
  const [location, setLocation] = useState(null);
  const handleOnSelect = ({ lat, lng }) => setLocation({ lat, lng });

  return (
    <Container className={styles.container}>
      <Container className={styles.map}>
        <DynamicMap observations={observations} location={location} bounds={bounds} />
      </Container>
      <Container className={styles.table}>
        <Table observations={observations} onSelect={handleOnSelect} />
      </Container>
    </Container>
  );
}

MapWithTable.propTypes = {
  location: PropTypes.object,
  observations: PropTypes.array,
  bounds: PropTypes.array,
};
