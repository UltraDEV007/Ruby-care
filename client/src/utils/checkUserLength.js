export const checkUserLength = (users, loading) => {
  if (loading) {
    return <>Loading...</>;
  }

  if (users.length === 0) {
    return <>No users found</>;
  } else if (users.length === 1) {
    return <>User</>;
  } else return <>Users</>;
};
