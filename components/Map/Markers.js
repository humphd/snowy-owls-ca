import PropTypes from 'prop-types';
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import since from '../../src/lib/since';

import 'react-leaflet-markercluster/dist/styles.min.css';

const icon = new Icon({
  iconUrl: 'marker.png',
  iconSize: [48, 48],
  iconAnchor: [24, 45],
});

export function Markers({ location, observations }) {
  // Return a single Marker if only 1 location is passed
  if (location) {
    const { lat, lng } = location;
    return <Marker position={[lat, lng]} icon={icon}></Marker>;
  }

  // Create a cluster group for all the markers in observations
  if (observations) {
    return (
      <MarkerClusterGroup>
        {observations.map(({ id, lat, lng, date, location }) => (
          <Marker position={[lat, lng]} key={id} icon={icon}>
            <Popup>
              Where: {location}
              <br />
              When: {since(new Date(), date)}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    );
  }

  return null;
}

Markers.propTypes = {
  observations: PropTypes.array,
  location: PropTypes.object,
};
