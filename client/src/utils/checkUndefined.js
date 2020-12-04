// this gets rid of undefined error when searching a edit path by id of a food that is deleted/doesn't exist
// if (oneFood?.name === undefined) {
//   window.history.back();
// } else {
//   const { name, time, rating } = oneFood;
//   setFormData({ name, time, rating });
// }

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
