import styled from "styled-components";
import { grey, yellow, blue } from "@material-ui/core/colors";

const Wrapper = styled.div`
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
    margin-top: 40px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .title {
    font-size: clamp(20px, 10vw, 40px);
    padding-top: 20px;
  }
  .arrow-container {
    position: absolute;
    left: 0;
    padding: 10px;
    top: 0;
  }
  .arrow-icon {
    font-size: clamp(30px, 10vw, 60px);
    padding: 1px;
  }

  .user-icon {
    margin-right: 10px;
    margin-bottom: -2px;
    font-size: clamp(20px, 10vw, 35px);
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
  .inner-column {
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
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
    font-size: clamp(0.8rem, 5vw, 1.3rem);
  }
  .edit {
    margin-right: 10px;
  }
  .top-hr {
    margin-top: 20px;
  }

  .age,
  .gender {
    padding-bottom: 1px;
    font-size: clamp(0.5rem, 10vw, 1.2rem);
  }
  a {
    color: ${({ darkMode }) => (darkMode === "dark" ? yellow[700] : blue[600])};
    text-decoration: none;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-size: clamp(16px, 10vw, 1.5rem);
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
    @media screen and (min-width: 1280px) {
    }
  }
`;
export default Wrapper;
