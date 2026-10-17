import PropTypes from 'prop-types';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Markers } from './Markers';

// Fill the available space of the parent. Set the desired dimensions on parent.
const style = {
  height: '100%',
  width: '100%',
};

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

ChangeView.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
};

export default function SingleLocationMap({ location, bounds }) {
  const zoom = 11;
  return (
    <MapContainer style={style} zoom={zoom} bounds={bounds} scrollWheelZoom={false}>
      <ChangeView center={location} zoom={zoom} />
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        maxZoom="19"
      />
      <Markers location={location} />
    </MapContainer>
  );
}

SingleLocationMap.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  bounds: PropTypes.array,
};
