import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ title, children }) {
  return (
    <>
      <Header title={title} />
      <div className="layout-children" style={{ minHeight: "100vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
