const { EbirdClient } = require('ebird-client');
const { bounds } = require('./points');
const { processObservation } = require('./observation');

const prepareResults = (results, region) => ({
  regionName: region.name,
  // The bounding coords of the observations, for zooming the map
  bounds: bounds(results, region.bbox),
  observations: results.map((result) => processObservation(result, region)),
});

module.exports = class SnowyOwl {
  constructor(apiKey) {
    this.ebird = new EbirdClient(apiKey);
    this.speciesCode = 'snoowl1';
  }

  async recentObservations(region) {
    const results = await this.ebird.recentObservationsOfASpeciesInARegion({
      regionCode: region.regionCode,
      speciesCode: this.speciesCode,
      includeProvisional: true,
      back: 30,
    });
    return prepareResults(results, region);
  }
};
