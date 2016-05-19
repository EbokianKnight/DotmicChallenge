// due to the fact that the output is not interesting.
// instead of using new Date() to get the current time,
// I'm going to use '2013-11-09 13:59:40' as the current time
// this would be swapped for anything real.

export default function timeSince(date) {
  const dateString = Date.parse(date);
  const seconds = Math.floor((Date.parse('2013-11-09 13:59:40') - dateString) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}
