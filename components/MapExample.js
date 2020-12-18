import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const style = {
  minWidth: '295px',
  maxWidth: '475px',
  width: '100%',
  margin: '1.5rem auto',
};

export default function MapExample() {
  return (
    <Card style={style}>
      <Link href="/map">
        <a>
          <Card.Img
            variant="top"
            src="/map-example.jpg"
            alt="Using the map to find recent Snowy Owl sightings"
            loading="lazy"
          />
        </a>
      </Link>

      <Card.Body>
        <Card.Title>Snowy Owl Sightings Map</Card.Title>
        <Card.Text>
          The{' '}
          <Link href="/map">
            <a>map</a>
          </Link>{' '}
          shows sightings for the past 30 days. Click a sighting for more info. Multiple sightings
          are grouped together. Click a group to expand. You can also see this same data as a{' '}
          <Link href="/data">
            <a>table</a>
          </Link>
          .
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
