// https://javascript.info/regexp-anchors first example for regex reference
const whiteList = [
  /^\/insights/,
  /^\/settings/,
  /^\/login/,
  /^\/register/,
  /^\/moods/,
  /^\/symptoms/,
  /^\/affirmations/,
  /^\/$/, //carrot says begin from here,  the dollar says end
];

export const checkValidity = (path) => {
  // loop through the whitelist array one by one
  // getting one individual item from the whitelist with "of"
  // by default, any url that is being entered that is false, we only set it to true when the url.test matches any of the patterns in the whitelist, thats the only time we're setting the valid to true
  for (let url of whiteList) {
    //"test" tests whether path is whitelisted or not
    // url.test returns true or false.
    // ".test" is a function that can be called on any regex
    if (url.test(path)) {
      // if the path matches any of the whitelisted urls, return true
      return true;
    }
  }
  // if it's not there then return false
  return false;
};
// to escape the forward slash we're using the backslash because in regex the forward slash is a reserved symbol
