const ebird = require('./ebird');
const { bounds } = require('./points');
const { processObservation } = require('./observation');

const prepareResults = (results, region) => ({
  regionName: region.name,
  // The bounding coords of the observations, for zooming the map
  bounds: bounds(results, region.bbox),
  observations: results.map((result) => processObservation(result, region)),
});

module.exports = class SnowyOwl {
  constructor({ apiKey, fetchImpl } = {}) {
    this.speciesCode = 'snoowl1';
    this.apiKey = apiKey;
    this.fetchImpl = fetchImpl;
  }

  async recentObservations(region) {
    const results = await ebird.recentObservationsOfASpeciesInARegion({
      regionCode: region.regionCode,
      speciesCode: this.speciesCode,
      includeProvisional: true,
      back: 30,
      apiKey: this.apiKey,
      fetchImpl: this.fetchImpl,
    });
    return prepareResults(results, region);
  }
};
