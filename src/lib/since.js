import formatDistance from 'date-fns/formatDistance';

// Calculate the difference between two dates, and return in a pretty format
export default function since(a, b) {
  // Remove the "about " prefix from "about 5 hours ago"
  const stripAbout = (s) => s.replace(/about\s*/, '');

  try {
    const distance = formatDistance(new Date(b), new Date(a), { addSuffix: true });
    return stripAbout(distance);
  } catch (err) {
    return 'Unknown';
  }
}
