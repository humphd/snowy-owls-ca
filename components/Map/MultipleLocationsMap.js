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
  if (center) {
    map.setView(center, zoom);
  }
  return null;
}

export default function MultipleLocationsMap({ observations, bounds }) {
  const zoom = 11;

  let center;
  if (observations.length === 1) {
    const { lat, lng } = observations[0];
    center = [lat, lng];
  }

  return (
    <MapContainer style={style} center={center} bounds={bounds} scrollWheelZoom={false} zoom={11}>
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>'
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
