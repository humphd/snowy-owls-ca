// Parse a date string like "2020-11-14" and deal with 0-based month
const parseDatePortion = (d) => {
  const [year, month, day] = d.split('-');
  return {
    year: year | 0,
    // month needs to be 0-based
    month: (month | 0) - 1,
    day: day | 0,
  };
};

// Parse a time string like "15:00"
const parseTimePortion = (t) => {
  const [hour, minute] = t.split(':');
  return {
    hour: hour | 0,
    minute: minute | 0,
  };
};

// Try to deal with common eBird date formats. To save space,
// I'm doing this manually vs. using date-fns/parse. Convert
// the eBird dateString to something `new Date()` can handle:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
module.exports.toDate = (dateString) => {
  // Most have a date and time: "2020-11-14 15:00"
  if (/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$/.test(dateString)) {
    const [date, time] = dateString.split(' ');
    const { year, month, day } = parseDatePortion(date);
    const { hour, minute } = parseTimePortion(time);
    console.log({ dateString, year, month, day, hour, minute });
    return new Date(year, month, day, hour, minute);
  }

  // But some also have date without time: "2020-11-15"
  if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(dateString)) {
    const { year, month, day } = parseDatePortion(dateString);
    return new Date(year, month, day);
  }

  // If we don't find either, return today (not ideal)
  return new Date();
};
