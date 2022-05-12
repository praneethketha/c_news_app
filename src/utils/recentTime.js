export const convertDate = (publishedAt) => {
  const published = new Date(publishedAt).getTime();
  const current = Date.now();
  var diff = (current - published) / 1000;
  if (diff < 60) {
    return `${Math.round(diff)} seconds`;
  }
  diff = diff / 60;
  if (diff < 60) {
    return `${Math.round(diff)} minutes`;
  }
  diff = diff / 60;
  if (diff < 24) {
    return `${Math.round(diff)} hours`;
  }
  diff = diff / 24;
  return `${Math.round(diff)} days`;
};
