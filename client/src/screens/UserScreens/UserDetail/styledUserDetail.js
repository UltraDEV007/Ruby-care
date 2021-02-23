import styled from "styled-components";
import { grey, yellow, blue } from "@material-ui/core/colors";

const Wrapper = styled.div`
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
    color: ${({ themeState }) => (themeState === "dark" ? grey[100] : "#000")};
  }
  .title {
    font-size: 1.6rem;
    font-size: clamp(1.5rem, 4vw, 40px);
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
    width: clamp(50px, 100px, 150px);
    height: clamp(50px, 100px, 150px);
    align-self: center;
    margin: 10px;
    border: ${({ themeState }) =>
      themeState === "dark" ? "1px solid white" : "1px solid black"};
    border-radius: 50%;
    object-fit: cover;
  }
  .inner-column {
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    min-height: 400px;
    color: ${({ themeState }) => (themeState === "dark" ? grey[100] : "#000")};
  }
  .insights-container {
    display: flex;
    flex-direction: column;
    max-height: 450px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
  }
  .likes-container {
    display: flex;
    flex-direction: column;
    max-height: 250px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
  }
  .insights-container::-webkit-scrollbar,
  .likes-container::-webkit-scrollbar {
    display: none;
  }
  .check-insights {
    margin-bottom: 20px;
    font-size: clamp(0.9rem, 2vw, 2vh);
  }
  .check-likes {
    font-size: clamp(0.9rem, 2vw, 2vh);
    margin-top: 20px;
  }
  .edit {
    margin-right: 10px;
  }
  .top-hr {
    margin-top: 20px;
  }
  .age,
  .gender,
  .date {
    padding-bottom: 1px;
    font-size: 1.2rem;
    font-size: clamp(0.9rem, 2vw, 2vh);
  }
  a {
    color: ${({ themeState }) =>
      themeState === "dark" ? yellow[700] : blue[600]};
    text-decoration: none;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
    padding: 1.7px;
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
  @media screen and (min-width: 1024px) {
    .user-image {
      height: 150px;
      width: 150px;
    }
  }
`;
export default Wrapper;
