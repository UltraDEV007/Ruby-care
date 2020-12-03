import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { checkValidity } from "../../utils/checkValidity";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  .title {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1000px) {
    .title {
      font-size: 2rem;
    }
  }
`;

function NotFound() {
  let location = useLocation();

  return checkValidity(location.pathname) ? (
    <></>
  ) : (
    <>
      <ErrorWrapper>
        <Typography className="title">ERROR 404,</Typography>
        <p>Sorry, {location.pathname.replace("/", "")} doesn't exist!</p>
        <NavLink to="/"> Go Back </NavLink>
      </ErrorWrapper>
    </>
  );
}

export default NotFound;
