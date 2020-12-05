export const checkUserLength = (usersParam, loadingParam) => {
  if (!loadingParam) {
    return <>Loading...</>;
  }

  if (usersParam.length === 0) {
    return <>No users found</>;
  } else if (usersParam.length === 1) {
    return <>User:</>;
  } else return <>Users:</>;
};
