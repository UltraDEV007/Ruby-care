import { useContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { AllUsersStateContext } from "../../components/Context/AllUsersContext";

function Layout({ title, children }) {
  const { allUsers } = useContext(AllUsersStateContext);

  return (
    <>
      <Header allUsers={allUsers} title={title} />
      <div className="layout-children">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
