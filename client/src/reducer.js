export const initialState = {
  currentUser: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        currentUser: action.currentUser,
      };
    case "EDIT_USER":
      return { currentUser: action.currentUser };
    case "REMOVE_USER":
      return { currentUser: null };
    default:
      return state;
  }
}

export default reducer;
