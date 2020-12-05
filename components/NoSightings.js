// Image used under CC license https://www.flickr.com/photos/15609463@N03/24770284240/
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import useRegion from '../src/hooks/use-region';

import styles from './NoSightings.module.css';

export default function NoSightings() {
  const { name } = useRegion();
  return (
    <>
      <Container className={styles.placeholder}>
        <Figure style={{ width: '100%' }}>
          <Image
            src="/owls/on-the-fence/small.jpg"
            srcSet="/owls/on-the-fence/small.jpg 400w, /owls/on-the-fence/medium.jpg 800w"
            fluid
          />
          <Figure.Caption className="text-center">
            Snowy Owl, Wolf Island. February 14, 2016. Photo by{' '}
            <a href="https://www.flickr.com/photos/15609463@N03/">Jamie McCaffrey</a>
          </Figure.Caption>
        </Figure>
      </Container>
      <Container>
        <h1 className={styles.title}>{`No Sightings Reported for ${name} in the Last Month`}</h1>
      </Container>
    </>
  );
}
