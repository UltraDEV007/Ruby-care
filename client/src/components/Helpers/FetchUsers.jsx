import { useEffect } from "react";
import { getAllUsers } from "../../services/users";

function FetchUsers({ setAllUsers }) {
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setAllUsers(userData);
    };
    fetchUsers();
  }, [setAllUsers]);

  return null;
}

export default FetchUsers;
