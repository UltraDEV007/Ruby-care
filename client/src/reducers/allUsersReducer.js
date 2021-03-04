import { getAllUsers } from "../services/users";

export const usersReducer = (state, action) => {
  return new Promise(async (resolve) => {
    const { type, payload } = action;

    switch (type) {
      case "INIT":
        try {
          const allUsers = await getAllUsers();
          resolve({ ...state, allUsers, usersAreLoading: false });
        } catch (error) {
          return state;
        }
        return state;

      case "USER_CREATED":
        try {
          resolve({ ...state, allUsers: [...state.allUsers, payload] });
        } catch (error) {
          return state;
        }
        return state;

      case "UPDATE_USERS":
        try {
          resolve({
            ...state,
            allUsers: state.allUsers.map((user) =>
              user.id === Number(payload.id) ? payload : user
            ),
          });
        } catch (error) {
          return state;
        }
        return state;

      case "USER_REMOVED":
        try {
          resolve({
            ...state,
            allUsers: state.allUsers.filter(
              (user) => user.id !== Number(payload.id)
            ),
          });
        } catch (error) {
          return state;
        }
        return state;

      default:
        return state;
    }
  });
};
