import { grey, yellow } from "@material-ui/core/colors";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-self: center;
    }
  }

  .title-container {
    align-self: center;
    margin-top: 40px;
    text-align: center;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }

  .insight-body {
    margin: 0 auto;
    margin-top: 20px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    text-align: left;
  }

  .insight-comments {
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
    display: block;
    margin-top: 20px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    text-align: left;
  }

  .comment-list {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  .hr-bottom {
    margin-top: 10px;
    margin-bottom: 13px;
  }
  .user-name {
    font-size: 1.3rem;
    font-size: clamp(1rem, 3vw, 1.3rem);
    transition: transform 250ms ease-in-out;
    padding: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
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

  .user-image {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-right: 8px;
    object-fit: cover;
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

  .inner-column {
    width: 98%;
    max-width: 1100px;
    padding: 20px;
    min-height: 600px;
  }

  .inner-column-comments {
    display: block;
    width: 98%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
  }

  .insight-text {
    line-height: 1.5rem;
    font-size: clamp(12px, 10vw, 16px);
  }

  .title {
    font-size: 1.6rem;
    font-size: clamp(1rem, 4vw, 4vh);
    padding-top: 20px;
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    .inner-column {
      width: 98%;
      max-width: 1100px;
      padding: 20px 50px;
    }

    .insight-text {
      font-size: 1rem;
      font-size: clamp(1rem, 20vw 1.1rem);
    }

    @media screen and (min-width: 1280px) {
      .insight-text {
        font-size: 1.3rem;
        font-size: clamp(1.3rem, 20vw, 1.4rem);
        line-height: 1.7rem;
      }

      .inner-column {
        width: 98%;
        max-width: 1100px;
        padding: 20px 20px;
      }
    }
  }
`;

export default Wrapper;
