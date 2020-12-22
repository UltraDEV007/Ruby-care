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
`;

export default Form;
