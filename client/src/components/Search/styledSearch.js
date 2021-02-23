import { blue, yellow } from "@material-ui/core/colors";
import styled from "styled-components";

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::placeholder {
    color: ${({ themeState }) => (themeState === "dark" ? "#fff" : `inherit`)};
  }

  .vl {
    border-left: ${({ themeState }) =>
      themeState === "dark"
        ? `1px solid ${yellow[700]}`
        : `1px solid ${blue[500]}`};
    height: 40px;
    margin-right: 10px;
  }

  .icon {
    position: absolute;
    right: 10px;
    background: ${({ themeState }) =>
      themeState === "dark" ? "#424242" : "#fff"};
    height: 100%;
  }

  input {
    width: 68vw;
    font-size: 18px;
    letter-spacing: 0.1px;
    padding: 12px;
    border: ${({ themeState }) =>
      themeState === "dark"
        ? `1px solid ${yellow[700]}`
        : `1px solid ${blue[500]}`};

    text-align: left;
    box-shadow: 5px 5px peachpuff;

    box-shadow: ${({ themeState }) =>
      themeState === "dark" ? `5px 5px${yellow[700]}` : `5px 5px ${blue[500]}`};

    background: ${({ themeState }) => themeState === "light" && "#fff"};
  }

  @media screen and (min-width: 1200px) {
    input {
      width: 50vw;
    }
  }

  input:focus {
    outline: none;
  }
`;
export default Form;
