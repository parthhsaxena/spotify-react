export const ACCESS_CODE =
  "Bearer BQAf21WQQOR_AnW4g-tPWf_ePrSH36YEPKxoouhZOQLBR0p-qk-JMdqDnDB61AT9vy8qqGJLo0mL5reMXlwBDFA0zDcgEnXOb-W5cxH4KaX3gJr4zrw";

export const FEATURED_PLAYLISTS =
  "https://api.spotify.com/v1/browse/featured-playlists?locale=hi_IN&limit=24";

export const millisecondsToDuration = function (milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  let duration = "";
  if (days > 0) {
    duration += days + "d ";
  }
  if (hours > 0) {
    duration += hours + "h ";
  }
  if (minutes > 0) {
    duration += minutes + "m ";
  }
  if (seconds > 0) {
    duration += seconds + "s ";
  }

  return duration.trim();
};

export const timeAgo = function (timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;
  const secondsInYear = 365 * secondsInDay;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minutes ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hours ago`;
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} days ago`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} months ago`;
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years} years ago`;
  }
};
