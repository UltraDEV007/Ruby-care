import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ title, children, darkMode, setDarkMode }) {
  return (
    <>
      <Header title={title} darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="layout-children" style={{ minHeight: "800px" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
