const { toDate } = require('./date');

// Get rid of various things we don't need in the location:
//  CA
//  CA-ON
//  ON
//  Ontario
//  44.21323, -76.42260
// (44.21323, -76.42260)
const cleanLocation = (loc, region) =>
  loc
    .replace(/[, ]*CA-[A-Z]{2}[, ]*?/, '')
    .replace(new RegExp(` ${region.regionCode.replace('CA-', '')}[ -]?`), '')
    .replace(/[, ]*CA[, ]*/, '')
    .replace(/\(?[0-9.,]+[.,][0-9]+,?\s*-?[0-9.,]+[.,][0-9]+\)?/, '')
    .replace(new RegExp(`[, ]*${region.name},?$`), '')
    .replace(/,$/, '')
    .trim();

// Process an eBird observation to the form we need. The `loc`
// is an optional point (lat, lng) from which to calculate distances
module.exports.processObservation = (result, region) => {
  const dateTime = toDate(result.obsDt).getTime();

  return {
    // Generate a unique id for this observation using id and date
    id: `${result.locId}-${dateTime}`,
    date: dateTime,
    location: cleanLocation(result.locName, region),
    lat: result.lat,
    lng: result.lng,
  };
};
