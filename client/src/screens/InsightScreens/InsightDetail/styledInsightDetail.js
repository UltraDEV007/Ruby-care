import { grey, yellow } from "@material-ui/core/colors";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 20px;
    }
    .buttons2 {
      display: flex;
      flex-direction: row;
      align-self: center;
    }
  }
  .title-container {
    align-self: center;
    padding: 20px;
    margin-top: 40px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
  }
  .insight-body {
    margin: 0 auto;
    margin-top: 20px;
    min-width: 400px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    min-height: 400px;
    padding: 20px 50px;
    text-align: left;
    font-size: 1rem;
  }
  .user-name {
    font-size: 1.3rem;
    transition: transform 250ms ease-in-out;
    padding: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .user-icon {
    margin-right: 10px;
    margin-bottom: -2px;
    font-size: 30px;
  }
  .user-name:hover {
    text-decoration: underline;
    text-decoration-color: ${({ darkMode }) =>
      darkMode === "dark" ? yellow[700] : "#000"};
    cursor: pointer;
    transition: transform 250ms ease-in-out;
    cursor: pointer;
    transform: scale(1.09);
  }
  .link {
    text-decoration: none;
    color: ${({ darkMode }) => (darkMode === "dark" ? "#fff" : "#000")};
    cursor: pointer;
  }
  .edit {
    margin-right: 10px;
  }
  hr {
    margin-top: 20px;
  }

  @media screen and (min-width: 600px) {
    .title {
      font-size: 1.5rem;
    }
    .insight-body {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 1280px) {
      .title {
        font-size: 2rem;
      }
      .insight-body {
        font-size: 1.3rem;
      }
    }
  }
`;

export default Wrapper;
