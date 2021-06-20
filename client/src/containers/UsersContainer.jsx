import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { getOneUser } from "../services/users";
import UserDetail from "../screens/UserScreens/UserDetail/UserDetail";
import Community from "../screens/main/Community/Community";
import { AllUsersStateContext } from "../context/AllUsersContext";

export default function UsersContainer() {
  const { allUsers, usersAreLoading } = useContext(AllUsersStateContext);

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
