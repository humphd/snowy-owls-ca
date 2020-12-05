const { lineString, point } = require('@turf/helpers');
// Dear turf, some consistency on your import style would be great!
// https://github.com/Turfjs/turf/issues/1478
let bbox = require('@turf/bbox').default;
bbox = typeof bbox.default === 'function' ? bbox.default : bbox;
let buffer = require('@turf/buffer');
buffer = typeof buffer.default === 'function' ? buffer.default : buffer;

const normalizeLat = (value) => value.lat || value.latitude;
const normalizeLng = (value) => value.lng || value.longitude;

const bboxToLeaflet = ([minX, minY, maxX, maxY]) => [
  // Top-left corner of bounding box
  [minX, maxY],
  // Bottom-right corner of bounding box
  [maxX, minY],
];

// Calculate the bounding box for the given set of points and
// convert it into the form that we need for Leaflet to use, see:
// https://leafletjs.com/reference-1.7.1.html#latlngbounds
// https://leafletjs.com/reference-1.7.1.html#map-fitbounds
// http://turfjs.org/docs/#bbox
module.exports.bounds = (points, bboxDefault) => {
  if (!points.length) {
    return bboxToLeaflet(bboxDefault);
  }

  if (points.length === 1) {
    const { lng, lat } = points[0];
    const buf = buffer(point([lng, lat]), 100, { units: 'kilometers' });
    return bboxToLeaflet(bbox(buf));
  }

  points = points.map((point) => [normalizeLat(point), normalizeLng(point)]);
  const line = lineString(points);
  return bboxToLeaflet(bbox(line));
};
