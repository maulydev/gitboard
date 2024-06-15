export const relativeTime = (longDateStr: string) => {
  const date: any = new Date(longDateStr);
  const now: any = new Date();
  const diffInMs = now - date;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} ${diffInSeconds > 1 ? "seconds" : "second"} ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes > 1 ? "minutes" : "minute"} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours > 1 ? "hours" : "hour"} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays > 1 ? "days" : "day"} ago`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} ${diffInWeeks > 1 ? "weeks" : "week"} ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths > 1 ? "months" : "month"} ago`;
  } else {
    return `${diffInYears} ${diffInYears > 1 ? "years" : "year"} ago`;
  }
};

export const localDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  return date.toLocaleDateString("en-US", options);
};
