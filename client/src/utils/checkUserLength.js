export const checkUserLength = (params, loadingParam) => {
  if (!loadingParam) {
    return <>Loading...</>;
  }

  if (params.length === 0) {
    return <>No users found</>;
  } else if (params.length === 1) {
    return <>User:</>;
  } else return <>Users:</>;
};
