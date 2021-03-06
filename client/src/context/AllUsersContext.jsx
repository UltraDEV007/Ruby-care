import React, { createContext, useMemo, useRef } from "react";
import useAsyncReducer from "../hooks/useAsyncReducer";
import { usersReducer } from "../reducers/allUsersReducer";

export const AllUsersStateContext = createContext();
export const AllUsersDispatchContext = createContext();

export default function AllUsersProvider({ children }) {
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
