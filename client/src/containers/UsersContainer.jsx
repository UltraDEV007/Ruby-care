import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getOneUser } from "../services/users";
import UserDetail from "../screens/UserScreens/UserDetail/UserDetail";
import Community from "../screens/main/Community/Community";
import {
  AllUsersDispatchContext,
  AllUsersStateContext,
} from "../context/AllUsersContext";

export default function UsersContainer() {
  const { allUsers, usersAreLoading } = useContext(AllUsersStateContext);

  const dispatchAllUsers = useContext(AllUsersDispatchContext);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatchAllUsers({ type: "INIT" });
    };
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Switch>
        <Route path="/users/:id">
          <UserDetail getOneUser={getOneUser} />
        </Route>
        <Route path="/users/">
          <Community usersAreLoading={usersAreLoading} allUsers={allUsers} />
        </Route>
      </Switch>
    </>
  );
}
