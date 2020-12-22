import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;

  .users-title {
    font-size: 2.3rem;
    padding: 10px;
    margin-bottom: 5px;
  }

  .link {
    color: ${({ darkMode }) => (darkMode === "dark" ? "inherit " : "inherit")};
    text-decoration: none;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    padding: 8px;
    font-family: "montserrat", sans-serif;
    transition: transform 300ms ease-in-out;
  }

  .link:hover {
    transition: transform 300ms ease-in-out;
    text-decoration: underline;
    cursor: pointer;
    transform: translateY(-1.06px);
  }

  .user-icon {
    margin-top: 3px;
    margin-right: 5px;
    font-size: 36px;
  }

  .user-image {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-top: 3px;
    margin-right: 5px;
  }
  .users-container {
    text-align: center;
    height: auto;
  }

  .title-container {
    text-align: center;
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    .users-title {
      font-size: 3.2rem;
    }
    .link {
      font-size: 1rem;
    }
  }
`;

export default Div;
