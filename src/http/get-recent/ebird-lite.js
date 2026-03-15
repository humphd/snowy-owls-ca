// Inspired by https://github.com/dannyfritz/ebird-client, but smaller
// https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest#755ce9ab-dc27-4cfc-953f-c69fb0f282d9
// curl --location --request GET 'https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/{{speciesCode}}' \
// --header 'X-eBirdApiToken: {{x-ebirdapitoken}}'

module.exports.recentObservationsOfASpeciesInARegion = async ({
  regionCode,
  speciesCode,
  includeProvisional = false,
  back = 30,
  apiKey = process.env.API_KEY,
  fetchImpl = fetch,
}) => {
  const url = `https://api.ebird.org/v2/data/obs/${regionCode}/recent/${speciesCode}?back=${back}&includeProvisional=${includeProvisional}`;
  try {
    const res = await fetchImpl(url, {
      headers: {
        'X-eBirdApiToken': apiKey,
      },
    });

    if (!res.ok) {
      throw new Error(`eBird API returned ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.warn(err);
    throw new Error(`Error connecting to eBird API: ${err.message}`);
  }
};
