import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap/Table';

import since from '../../src/lib/since';
import SortHeading from './SortHeading';
import useRegion from '../../src/hooks/use-region';

import styles from './Table.module.css';

export default function Table({ observations, onSelect }) {
  const { name } = useRegion();
  const [desc, setDesc] = useState(true);
  const sortedObservations = useMemo(() => {
    if (!observations) {
      return null;
    }
    return [...observations].sort((a, b) => (desc ? b.date - a.date : a.date - b.date));
  }, [desc, observations]);

  const title = `${observations.length} Sighting${
    observations.length > 1 ? 's' : ''
  } for ${name} in the Last Month`;

  const handleOnClick = (e, id) => {
    e.stopPropagation();
    const observation = observations.find((observation) => observation.id === id);
    onSelect(observation);
  };

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <BootstrapTable hover>
        <thead>
          <tr>
            <th>Location</th>
            <SortHeading title="How Recent" desc={desc} onClick={() => setDesc(!desc)} />
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
  observations: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
