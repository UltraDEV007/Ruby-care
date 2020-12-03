import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { checkValidity } from "../../utils/checkValidity";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { DarkModeContext } from "../../components/Context/DarkModeContext";

const ErrorWrapper = styled.div`
  min-height: 100vh;

  a {
    text-decoration: none;
  }
  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  .title {
    margin-top: 20%;
    font-size: 1.2rem;
    font-family: "montserrat", sans-serif;
  }

  .paragraph {
    font-size: 0.5rem;
  }
  @media screen and (min-width: 1000px) {
    .title {
      margin-top: 5%;
      font-size: 3rem;
    }
    .paragraph {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 1600px) {
      .title {
        margin-top: 5%;
        font-size: 5rem;
      }
      .paragraph {
        font-size: 3.5rem;
      }
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
        <div className="text-container">
          <Typography className="title">ERROR 404,</Typography>
          <Typography className="paragraph">
            Sorry, {location.pathname.replace("/", "")} doesn't exist!
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            component={NavLink}
            to="/"
          >
            Go Back
          </Button>
        </div>
      </ErrorWrapper>
    </>
  );
}

export default NotFound;
