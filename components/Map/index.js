import PropTypes from 'prop-types';
import SingleLocationMap from './SingleLocationMap';
import MultipleLocationsMap from './MultipleLocationsMap';
import 'leaflet/dist/leaflet.css';

export default function Map({ location, observations, bounds }) {
  if (observations && observations.length) {
    return <MultipleLocationsMap observations={observations} bounds={bounds} />;
  }

  if (location) {
    return <SingleLocationMap location={location} bounds={bounds} />;
  }

  return null;
}

Map.propTypes = {
  location: PropTypes.object,
  observations: PropTypes.array,
  bounds: PropTypes.array,
};
