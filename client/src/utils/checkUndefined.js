// export const checkUndefined = (oneParam, param2, setParam) => {
//   if (oneParam?.param2 === undefined) {
//     window.history.back();
//   } else {
//     const { param2 } = oneParam;
//     setParam({ param2 });
//   }
// };

export const checkUndefined = (oneParam, setParam) => {
  if (oneParam?.content === undefined) {
    window.history.back();
  } else {
    const { content } = oneParam;
    setParam({ content });
  }
};
