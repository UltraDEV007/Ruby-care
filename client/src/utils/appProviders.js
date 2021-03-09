import AllUsersProvider from "../context/AllUsersContext";
import { CurrentUserProvider } from "../context/CurrentUserContext";
import { ThemeStateProvider } from "../context/ThemeStateContext";
import reducer, { initialState } from "../reducers/currentUserReducer";

export const appProviders = [
  <ThemeStateProvider />,
  <AllUsersProvider />,
  <CurrentUserProvider reducer={reducer} initialState={initialState} />,
];
