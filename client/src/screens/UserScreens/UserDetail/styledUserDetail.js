import styled from "styled-components";
import { grey, yellow, blue } from "@material-ui/core/colors";

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};

  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 30px;
    }
  }
  .title-container {
    align-self: center;
    padding: 20px;
    margin-top: 20px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .title {
    font-size: 1.3rem;
  }
  .gender {
    font-size: 0.8rem;
  }
  .user-icon {
    margin-right: 10px;
    margin-bottom: -2px;
    font-size: 30px;
  }
  .user-image {
    height: 150px;
    width: 150px;
    align-self: center;
    margin: 20px;
    border: 1px solid white;
    border-radius: 50%;
    object-fit: cover;
  }
  .body {
    margin: 0 auto;
    margin-top: 20px;
    min-width: 400px;
    min-height: 400px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .insights-container {
    display: flex;
    flex-direction: column;
    max-height: 450px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
  }
  .insights-container::-webkit-scrollbar {
    display: none;
  }
  .check-insights {
    margin-bottom: 10px;
  }
  .edit {
    margin-right: 10px;
  }
  .top-hr {
    margin-top: 20px;
  }

  a {
    color: ${({ darkMode }) => (darkMode === "dark" ? yellow[700] : blue[600])};
    text-decoration: none;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-family: "montserrat", sans-serif;
  }
  a:hover {
    text-decoration: underline;
  }
  .insights-link {
    transition: transform 300ms ease-in-out;
  }
  .insights-link:hover {
    transition: transform 300ms ease-in-out;
    cursor: pointer;
    transform: translateY(-1.06px);
  }
  @media screen and (min-width: 600px) {
    .title {
      font-size: 1.5rem;
    }
    .gender {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 1280px) {
      .title {
        font-size: 2rem;
        .gender {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
export default Wrapper;
