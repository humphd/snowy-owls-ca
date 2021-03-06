const regions = {
  ca: {
    name: 'Canada',
    capital: 'Ottawa',
    loc: { lat: 45.4215, lng: -75.6972 },
    bbox: [-141.002148438, 41.6748535156, -52.6536621094, 83.1161132813],
    regionCode: 'CA',
  },
  'ca-nl': {
    name: 'Newfoundland and Labrador',
    capital: "St John's",
    loc: { lat: 47.5615, lng: -52.7126 },
    bbox: [-67.808068, 46.618354, -52.616607, 60.372746],
    regionCode: 'CA-NL',
  },
  'ca-pe': {
    name: 'Prince Edward Island',
    capital: 'Charlottetown',
    loc: { lat: 46.2382, lng: -63.1311 },
    bbox: [-64.416819, 45.950751, -61.976959, 47.067328],
    regionCode: 'CA-PE',
  },
  'ca-ns': {
    name: 'Nova Scotia',
    capital: 'Halifax',
    loc: { lat: 44.6488, lng: -63.5752 },
    bbox: [-66.327748, 43.422065, -59.688629, 47.034817],
    regionCode: 'CA-NS',
  },
  'ca-nb': {
    name: 'New Brunswick',
    capital: 'Fredericton',
    loc: { lat: 45.9636, lng: -66.6431 },
    bbox: [-69.06356, 44.602757, -63.771108, 48.075141],
    regionCode: 'CA-NB',
  },
  'ca-qc': {
    name: 'Québec',
    capital: 'Québec City',
    loc: { lat: 46.8139, lng: -71.208 },
    bbox: [-79.765614, 44.99803, -57.100876, 62.593817],
    regionCode: 'CA-QC',
  },
  'ca-on': {
    name: 'Ontario',
    capital: 'Toronto',
    loc: { lat: 43.6532, lng: -79.3832 },
    bbox: [-95.161195, 41.669086, -74.347803, 56.861274],
    regionCode: 'CA-ON',
  },
  'ca-mb': {
    name: 'Manitoba',
    capital: 'Winnipeg',
    loc: { lat: 49.8951, lng: -97.1384 },
    bbox: [-102.001598, 48.99267, -88.947, 60.000059],
    regionCode: 'CA-MB',
  },
  'ca-sk': {
    name: 'Saskatchewan',
    capital: 'Regina',
    loc: { lat: 50.4452, lng: -104.6189 },
    bbox: [-109.999973, 48.992618, -101.36434, 60.000059],
    regionCode: 'CA-SK',
  },
  'ca-bc': {
    name: 'British Columbia',
    capital: 'Victoria',
    loc: { lat: 48.4284, lng: -123.3656 },
    bbox: [-139.060207, 48.306098, -114.037452, 60.000059],
    regionCode: 'CA-BC',
  },
  'ca-nu': {
    name: 'Nunavut',
    capital: 'Iqaluit',
    loc: { lat: 63.7467, lng: -68.517 },
    bbox: [-120.680819, 51.918647, -61.085479, 83.116523],
    regionCode: 'CA-NU',
  },
  'ca-nt': {
    name: 'Northwest Territories',
    capital: 'Yellowknife',
    loc: { lat: 62.454, lng: -114.3718 },
    bbox: [-136.445387, 60.000059, -101.986586, 78.766343],
    regionCode: 'CA-NT',
  },
  'ca-yt': {
    name: 'Yukon',
    capital: 'Whitehorse',
    loc: { lat: 60.7212, lng: -135.0568 },
    bbox: [-141.005549, 60.000059, -123.819103, 69.654202],
    regionCode: 'CA-YT',
  },
  'ca-ab': {
    name: 'Alberta',
    capital: 'Edmonton',
    loc: { lat: 53.5461, lng: -113.4938 },
    bbox: [-120.0, 48.99, -109.99, 60.0],
    regionCode: 'CA-AB',
  },
};

// Support any of CA-ON, ca-on, ON, on
const lookup = (regionCode) => {
  if (typeof regionCode !== 'string') {
    return null;
  }

  return regions[regionCode.toLowerCase()] || regions[`ca-${regionCode.toLowerCase()}`];
};
module.exports.lookup = lookup;

module.exports.validate = (regionCode) => !!lookup(regionCode);
