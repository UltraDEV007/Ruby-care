import React, { createContext, useMemo, useRef } from "react";
import useAsyncReducer from "../../hooks/useAsyncReducer";
import { getAllUsers } from "../../services/users";
export const AllUsersStateContext = createContext();
export const AllUsersDispatchContext = createContext();

const usersReducer = (state, action) => {
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

const AllUsersContextProvider = ({ children }) => {
  const initialUsersState = {
    allUsers: [],
    usersAreLoading: true,
  };

  const [state, dispatchAllUsers] = useAsyncReducer(
    usersReducer,
    initialUsersState
  );

  const dispatch = useRef(dispatchAllUsers);

  useMemo(async () => {
    dispatch.current({
      type: "INIT",
    });
  }, []);

  return (
    <AllUsersStateContext.Provider value={state}>
      <AllUsersDispatchContext.Provider value={dispatchAllUsers}>
        {children}
      </AllUsersDispatchContext.Provider>
    </AllUsersStateContext.Provider>
  );
};

export default AllUsersContextProvider;
