import React, { createContext, useReducer, useContext } from "react";
// this is the data layer, it's accessabile throughout the app
const CurrentUserContext = createContext();

// this is the provider
function CurrentUserProvider({ children, reducer, initialState }) {
  return (
    <CurrentUserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CurrentUserContext.Provider>
  );
}
// this is how we get the value inside of a component
const useStateValue = () => useContext(CurrentUserContext);
export { CurrentUserContext, CurrentUserProvider, useStateValue };
