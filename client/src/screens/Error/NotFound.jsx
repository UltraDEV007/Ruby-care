import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { checkValidity } from "../../utils/checkValidity";
function NotFound() {
  let location = useLocation();

  return checkValidity(location.pathname) ? (
    <></>
  ) : (
    <>
      <p>Sorry, {location.pathname.replace("/", "")} doesn't exist!</p>
      <NavLink to="/"> Go Back </NavLink>
    </>
  );
}

export default NotFound;
