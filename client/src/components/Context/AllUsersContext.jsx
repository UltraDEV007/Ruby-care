import React, { createContext, useReducer, useMemo } from "react";
import { getAllUsers } from "../../services/users";
export const AllUsersStateContext = createContext();
export const AllUsersDispatchContext = createContext();

const usersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INIT":
      return {
        allUsers: payload,
      };
    case "USER_CREATED":
      return {
        ...state,
        allUsers: [...state.allUsers, payload],
      };
    case "UPDATE_USERS":
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id === Number(payload.id) ? payload : user
        ),
      };
    case "USER_REMOVED":
      return {
        ...state,
        allUsers: state.allUsers.filter(
          (user) => user.id !== Number(payload.id)
        ),
      };

    default:
      return state;
  }
};

const AllUsersContextProvider = ({ children }) => {
  const initialUsersState = {
    allUsers: [],
    usersAreLoading: true,
  };

  const [state, dispatchAllUsers] = useReducer(usersReducer, initialUsersState);

  useMemo(async () => {
    const usersData = await getAllUsers();
    dispatchAllUsers({
      type: "INIT",
      payload: usersData,
      usersAreLoading: false,
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
