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

export default function SingleLocationMap({ location, bounds }) {
  const zoom = 11;
  return (
    <MapContainer style={style} zoom={zoom} bounds={bounds} scrollWheelZoom={false}>
      <ChangeView center={location} zoom={zoom} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
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
