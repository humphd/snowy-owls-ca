const parse = require('date-fns/parse');

// Try to deal with common eBird date formats:
const toDate = (module.exports.toDate = (dateString) => {
  // Most have a date and time: "2020-11-14 15:00"
  if (/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$/.test(dateString)) {
    return parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
  }

  // But some also have date without time: "2020-11-15"
  if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(dateString)) {
    return parse(dateString, 'yyyy-MM-dd', new Date());
  }

  // If we don't find either, return today (not ideal)
  return new Date();
});

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
