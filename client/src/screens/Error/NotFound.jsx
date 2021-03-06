import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { checkValidity } from "../../utils/checkValidity";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ThemeStateContext } from "../../context/ThemeStateContext";
import { yellow, grey, blue } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";

const ErrorWrapper = styled.div`
  min-height: 100vh;
  background: ${({ themeState }) =>
    themeState === "light" ? grey[250] : grey[800]};

  .button {
    padding: 10px;
    margin-top: 50px;
    width: 25vw;
  }

  a {
    text-decoration: none;
  }

  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${({ themeState }) => (themeState === "light" ? "#000" : "#fff")};
    padding: 20px;
    overflow-wrap: break-word;
  }

  .title {
    margin-top: 10%;
    font-size: 2rem;
    font-family: "montserrat", sans-serif;
    color: ${({ themeState }) =>
      themeState === "light" ? "red" : yellow[700]};
  }

  .paragraph {
    font-size: 1.5rem;
    padding: "10px";
    margin-bottom: "20px";
    text-align: center;
    color: ${({ themeState }) => (themeState === "light" ? blue[600] : "#fff")};
  }

  @media screen and (min-width: 1000px) {
    .title {
      margin-top: 7%;
      font-size: 4rem;
    }
    .button {
      width: 20vw;
    }
    .paragraph {
      font-size: 2.5rem;
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
  const [themeState] = useContext(ThemeStateContext);
  let location = useLocation();

  return (
    !checkValidity(location.pathname) && (
      <ErrorWrapper themeState={themeState}>
        <div className="text-container">
          <Typography className="title">ERROR 404,</Typography>
          <Typography className="paragraph">
            Sorry, {location.pathname.replace("/", "")} doesn't exist!
          </Typography>
          <Button
            className="button"
            variant="contained"
            color="secondary"
            component={NavLink}
            to="/">
            Go Back
          </Button>
        </div>
      </ErrorWrapper>
    )
  );
}

export default NotFound;
