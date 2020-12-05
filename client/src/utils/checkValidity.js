const whiteList = [
  /^\/insights/,
  /^\/settings/,
  /^\/login/,
  /^\/register/,
  /^\/moods/,
  /^\/symptoms/,
  /^\/affirmations/,
  /^\/foods/,
  /^\/medications/,
  /^\/users/,
  /^\/$/,
];

export const checkValidity = (path) => {
  for (let url of whiteList) {
    if (url.test(path)) {
      return true;
    }
  }
  return false;
};
