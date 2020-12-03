import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();
  const whiteList = ["/", "/insights", "/settings/", "/login", "/register"];

  return whiteList.includes(location.pathname) ? (
    <></>
  ) : (
    <>
      <p>Sorry, {location.pathname.replace("/", "")} doesn't exist!</p>
      <NavLink to="/"> Go Back </NavLink>
    </>
  );
}

export default NotFound;
