// Image used under CC license https://www.flickr.com/photos/15609463@N03/24770284240/
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';
import Container from 'react-bootstrap/Container';
import useRegion from '../src/hooks/use-region';

import styles from './NoSightings.module.css';

export default function NoSightings({ error }) {
  const { name } = useRegion();
  const message = error
    ? 'Error: Unable to load sightings data at this time.'
    : `${name}: No Sightings Reported during the Last Month`;

  return (
    <>
      <Container className={styles.placeholder}>
        <LazyImage
          imgDir="/owls/on-the-fence"
          caption="Snowy Owl, Wolf Island, Ontario"
          author="Jamie McCaffrey"
          authorUrl="https://www.flickr.com/photos/15609463@N03/"
        />
      </Container>
      <Container>
        <h1 className={styles.title}>{message}</h1>
      </Container>
    </>
  );
}

NoSightings.propTypes = {
  error: PropTypes.bool,
};
