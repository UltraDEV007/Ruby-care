// reference: https://www.geeksforgeeks.org/how-to-detect-the-user-browser-safari-chrome-ie-firefox-and-opera-using-javascript/

// Get the user-agent string
export let userAgentString = navigator.userAgent;

// Detect Chrome
export let chromeAgent = userAgentString.indexOf("Chrome") > -1;

// Detect Internet Explorer
export let IExplorerAgent =
  userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1;

// Detect Firefox
export let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

// Detect Safari
export let safariAgent = userAgentString.indexOf("Safari") > -1;

// Discard Safari since it also matches Chrome
if (chromeAgent && safariAgent) safariAgent = false;

// Detect Opera
export let operaAgent = userAgentString.indexOf("OP") > -1;

// Discard Chrome since it also matches Opera
if (chromeAgent && operaAgent) chromeAgent = false;
