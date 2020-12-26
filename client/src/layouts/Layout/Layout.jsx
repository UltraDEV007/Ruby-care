import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { getAllUsers } from "../../services/users";

function Layout({ title, children }) {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setAllUsers(userData);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Header allUsers={allUsers} title={title} />
      <div className="layout-children">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
