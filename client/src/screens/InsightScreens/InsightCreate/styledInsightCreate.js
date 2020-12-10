import { grey } from "@material-ui/core/colors";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};
  .title-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;
    align-items: center;
  }
  .title {
    font-size: 1.2rem;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    display: flex;
    align-items: center;
  }
  .warning {
    color: red;
    font-size: 1rem;
    margin-bottom: -20px;
  }

  .about-container {
    font-size: 1.2rem;
    padding: 10px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .about-icon {
    font-size: 40px;
    margin-left: 10px;
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    .title {
      font-size: 2rem;
    }
    .warning {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .input-container {
    margin: 10px;
  }
  .string-input {
    min-width: 235px;
    width: 235px;
  }
  #outlined-multiline-static {
    width: 218px;
    min-height: 10vh;
  }
  .content {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .cancel {
    margin-left: 20px;
  }

  @media screen and (min-width: 1000px) {
    #outlined-multiline-static {
      min-width: 500px;
      min-height: 15vh;
    }
    .string-input {
      min-width: 520px;
    }
    .cancel {
      margin-left: 50px;
    }
    .input-container {
      margin: 20px;
    }
  }
`;

export { Div, Form };
