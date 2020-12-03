import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  destroyUser,
  getAllUsers,
  putUser,
  getOneUser,
} from "../services/users";
// import UserEdit from "../screens/UserScreens/UserEdit";
import UserDetail from "../screens/UserScreens/UserDetail";

export default function UsersContainer({ darkMode }) {
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const history = useHistory();

  const onDelete = (id) => {
    handleDelete(id);
    setOpenDelete(false);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setUsers(userData);
      setLoaded(true);
    };
    fetchUsers();
  }, []);

  const handleUpdate = async (id, userData) => {
    const updatedUser = await putUser(id, userData);
    setUsers((prevState) =>
      prevState.map((user) => {
        return user.id === Number(id) ? updatedUser : user;
      })
    );
    setUpdated(true);
    history.push("/insights");
  };

  const handleDelete = async (id) => {
    await destroyUser(id);
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
    history.push("/register");
  };
  return (
    <>
      <Switch>
        {/* <Route path="/users/:id/edit">
          <UserEdit users={users} handleUpdate={handleUpdate} />
        </Route> */}
        <Route path="/users/:id">
          <UserDetail getOneUser={getOneUser} handleDelete={handleDelete} />
        </Route>
      </Switch>
    </>
  );
}
