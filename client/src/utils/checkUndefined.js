const goOn = (oneParam, contentParam, setParam) => {
  contentParam = oneParam;
  setParam(contentParam);
};

export const checkUndefined = (oneParam, setParam, contentParam) => {
  if (oneParam?.content === undefined) {
    window.history.back();
  } else {
    goOn(oneParam, contentParam, setParam);
  }
};
