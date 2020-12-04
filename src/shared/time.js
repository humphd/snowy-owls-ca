const formatDistance = require('date-fns/formatDistance');
const parse = require('date-fns/parse');
const isDate = require('date-fns/isDate');

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

// Remove the "about " prefix from "about 5 hours ago"
const stripAbout = (s) => s.replace(/about\s*/, '');

// Calculate the difference between two dates, and return in a pretty format
module.exports.since = (first, second) => {
  let a, b;
  try {
    a = isDate(first) ? first : toDate(first);
    b = isDate(second) ? second : toDate(second);
    // Create a time distance and
    const distance = formatDistance(b, a, { addSuffix: true });
    return stripAbout(distance);
  } catch (err) {
    return 'Unknown';
  }
};
