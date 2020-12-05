// got this toTitleCase at stackoverflow https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
// literally just googled toTitleCase javascript and this was the first result

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
