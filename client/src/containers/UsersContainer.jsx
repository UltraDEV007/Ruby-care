import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllUsers, getOneUser } from "../services/users";
import UserDetail from "../screens/UserScreens/UserDetail";
import Users from "../screens/main/Users";

export default function UsersContainer() {
  const [allUsers, setAllUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setAllUsers(userData);
      setLoaded(true);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Switch>
        <Route path="/users/:id">
          <UserDetail getOneUser={getOneUser} />
        </Route>
        <Route path="/users/">
          <Users loaded={loaded} allUsers={allUsers} />
        </Route>
      </Switch>
    </>
  );
}
