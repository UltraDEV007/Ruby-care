export const checkUserLength = (params, params2) => {
  if (params2.length >= 1) {
    if (params.length > 1) {
      return <>Users:</>;
    } else if (params.length === 1) {
      return <>User:</>;
    } else return <>No Users Found </>;
  }
};
