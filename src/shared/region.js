const regions = {
  ca: {
    name: 'Canada',
    capital: 'Ottawa',
    loc: [45.4215, -75.6972],
    bbox: [-140.99778, 41.6751050889, -52.6480987209, 83.23324],
    regionCode: 'CA',
  },
  'ca-nl': {
    name: 'Newfoundland and Labrador',
    capital: "St John's",
    loc: [47.5615, -52.7126],
    bbox: [-67.808068, 46.618354, -52.616607, 60.372746],
    regionCode: 'CA-NL',
  },
  'ca-pe': {
    name: 'Prince Edward Island',
    capital: 'Charlottetown',
    loc: [46.2382, -63.1311],
    bbox: [-64.416819, 45.950751, -61.976959, 47.067328],
    regionCode: 'CA-PE',
  },
  'ca-ns': {
    name: 'Nova Scotia',
    capital: 'Halifax',
    loc: [44.6488, -63.5752],
    bbox: [-66.327748, 43.422065, -59.688629, 47.034817],
    regionCode: 'CA-NS',
  },
  'ca-nb': {
    name: 'New Brunswick',
    capital: 'Fredericton',
    loc: [45.9636, -66.6431],
    bbox: [-69.06356, 44.602757, -63.771108, 48.075141],
    regionCode: 'CA-NB',
  },
  'ca-qc': {
    name: 'Québec',
    capital: 'Québec City',
    loc: [46.8139, -71.208],
    bbox: [-79.765614, 44.99803, -57.100876, 62.593817],
    regionCode: 'CA-QC',
  },
  'ca-on': {
    name: 'Ontario',
    capital: 'Toronto',
    loc: [43.6532, -79.3832],
    bbox: [-95.161195, 41.669086, -74.347803, 56.861274],
    regionCode: 'CA-ON',
  },
  'ca-mb': {
    name: 'Manitoba',
    capital: 'Winnipeg',
    loc: [49.8951, -97.1384],
    bbox: [-102.001598, 48.99267, -88.947, 60.000059],
    regionCode: 'CA-MB',
  },
  'ca-sk': {
    name: 'Saskatchewan',
    capital: 'Regina',
    loc: [50.4452, -104.6189],
    bbox: [-109.999973, 48.992618, -101.36434, 60.000059],
    regionCode: 'CA-SK',
  },
  'ca-bc': {
    name: 'British Columbia',
    capital: 'Victoria',
    loc: [48.4284, -123.3656],
    bbox: [-139.060207, 48.306098, -114.037452, 60.000059],
    regionCode: 'CA-BC',
  },
  'ca-nu': {
    name: 'Nunavut',
    capital: 'Iqaluit',
    loc: [63.7467, -68.517],
    bbox: [-120.680819, 51.918647, -61.085479, 83.116523],
    regionCode: 'CA-NU',
  },
  'ca-nt': {
    name: 'Northwest Territories',
    capital: 'Yellowknife',
    loc: [62.454, -114.3718],
    bbox: [-136.445387, 60.000059, -101.986586, 78.766343],
    regionCode: 'CA-NT',
  },
  'ca-yt': {
    name: 'Yukon',
    capital: 'Whitehorse',
    loc: [60.7212, -135.0568],
    bbox: [-141.005549, 60.000059, -123.819103, 69.654202],
    regionCode: 'CA-YT',
  },
  'ca-ab': {
    name: 'Alberta',
    capital: 'Edmonton',
    loc: [53.5461, -113.4938],
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
