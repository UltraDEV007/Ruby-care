import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

function Layout({ title, children }) {
  return (
    <>
      <Header title={title} />
      <div className="layout-children">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
