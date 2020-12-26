import styled from "styled-components";

const Form = styled.form`
  .input-container {
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: flex-start;
  }
  .input-field {
    width: 300px;
  }
  .icon {
    margin-top: 10px;
    margin-right: 10px;
  }
  .gender-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  .user-image {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-top: 10px;
    margin-right: 10px;
  }
  .user-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .big-user-image {
    height: 100px;
    width: 100px;
    align-self: center;
    margin-bottom: 5px;
    border: ${({ darkMode }) =>
      darkMode === "dark" ? "1px solid white" : "1px solid black"};
    border-radius: 50%;
    object-fit: cover;
  }
  .big-icon {
    height: 100px;
    width: 100px;
    align-self: center;
    margin-bottom: 5px;
  }
  .icon-button {
    color: ${({ darkMode }) => (darkMode === "dark" ? "white" : "black")};
  }
  .icon-button.clear {
    display: ${({ image }) => (!image ? "none" : "auto")};
  }
  .visibility {
    color: ${({ darkMode }) => (darkMode === "dark" ? "white" : "black")};
  }
  .alert {
    color: red;
    text-align: center;
  }
`;

export default Form;
