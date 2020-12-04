const ebird = require('./ebird-lite');
const { bounds } = require('./points');
const { processObservation } = require('./observation');

const prepareResults = (results, region) => ({
  regionName: region.name,
  // The bounding coords of the observations, for zooming the map
  bounds: bounds(results, region.bbox),
  observations: results.map((result) => processObservation(result, region)),
});

module.exports = class SnowyOwl {
  constructor() {
    this.speciesCode = 'snoowl1';
  }

  async recentObservations(region) {
    const results = await ebird.recentObservationsOfASpeciesInARegion({
      regionCode: region.regionCode,
      speciesCode: this.speciesCode,
      includeProvisional: true,
      back: 30,
    });
    return prepareResults(results, region);
  }
};
