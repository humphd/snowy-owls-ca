import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import since from '../../src/lib/since';
import SortHeading from './SortHeading';

import styles from './Table.module.css';

export default function Table({ observations, onSelect }) {
  const [desc, setDesc] = useState(true);
  const sortedObservations = useMemo(() => {
    if (!observations) {
      return null;
    }
    return [...observations].sort((a, b) => (desc ? b.date - a.date : a.date - b.date));
  }, [desc, observations]);

  if (!sortedObservations) {
    return (
      <Container className={styles.loading} fluid>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  const handleOnClick = (e, id) => {
    e.stopPropagation();
    const observation = observations.find((observation) => observation.id === id);
    onSelect(observation);
  };

  if (!(observations && observations.length)) {
    return (
      <>
        <h1 className={styles.title}>{`${observations.length} Sightings in the Last Month`}</h1>
      </>
    );
  }

  return (
    <>
      <h1 className={styles.title}>{`${observations.length} Sightings in the Last Month`}</h1>
      <BootstrapTable hover>
        <thead>
          <tr>
            <th>Location</th>
            <SortHeading
              title="How Recent"
              desc={desc}
              onClick={() => {
                console.log('click', desc);
                setDesc(!desc);
              }}
            />
          </tr>
        </thead>
        <tbody className={styles.scrollable}>
          {sortedObservations.map(({ id, location, date }) => (
            <tr id={id} key={id} className={styles.row} onClick={(e) => handleOnClick(e, id)}>
              <td>{location}</td>
              <td className={styles.centre}>{since(new Date(), date, true)}</td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </>
  );
}

Table.propTypes = {
  observations: PropTypes.array,
  onSelect: PropTypes.func,
};
