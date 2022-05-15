export const convertDate = (publishedAt) => {
  const published = new Date(publishedAt).getTime();
  const current = Date.now(); //milliseconds
  var diff = (current - published) / 1000; // seconds
  // 59
  if (diff < 60) {
    return `${Math.round(diff)} seconds`;
  }
  diff = diff / 60;
  if (diff < 60) {
    return `${Math.round(diff)} minutes`;
  }
  //59 mintues
  diff = diff / 60; //hours
  if (diff < 24) {
    return `${Math.round(diff)} hours`;
  }
  //23 hours
  diff = diff / 24; //days
  return `${Math.round(diff)} days`;
};;
