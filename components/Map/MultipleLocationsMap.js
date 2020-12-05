import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Markers } from './Markers';

// Fill the available space of the parent. Set the desired dimensions on parent.
const style = {
  height: '100%',
  width: '100%',
};

export default function MultipleLocationsMap({ observations, bounds }) {
  return (
    <MapContainer style={style} bounds={bounds} scrollWheelZoom={false} zoom={11}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom="19"
      />
      <Markers observations={observations} />
    </MapContainer>
  );
}

MultipleLocationsMap.propTypes = {
  observations: PropTypes.array.isRequired,
  bounds: PropTypes.array.isRequired,
};
