import { useContext } from "react";
import styled from "styled-components";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import CurrentUserContainer from "./CurrentUserContainer";
import HeaderSearch from "./HeaderSearch";
import { yellow, blue } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";

const Ul = styled.ul`
  margin: 0;
  flex-flow: column nowrap;
  background-color: ${({ isLight }) => (isLight ? blue[600] : yellow[700])};
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 1.5rem;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  z-index: 998;
  overflow: scroll;
  display: flex;
  align-items: center;
  li {
    padding: 40px;
    font-size: large;
    font-weight: 30px;
    text-decoration: none;
  }
  li:hover {
    cursor: default;
  }
  span {
    margin-left: 10px;
  }
  span:hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

const Dropdown = styled(Card)`
  position: absolute;
  min-width: 250px;
  top: 110px;
  z-index: 999999;

  background: ${({ themeState }) =>
    themeState === "dark" ? yellow[700] : "#3788E5"};
  box-shadow: ${({ isSearching }) =>
    isSearching ? "-3px 5px 17px 1px #000" : ""};
  .dropdown-items {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

function OpenNavBar({ open, search, setSearch, usersJSX }) {
  const [themeState] = useContext(ThemeStateContext);
  return (
    <Ul open={open} isLight={themeState === "light"}>
      <li>
        <HeaderSearch
          themeState={themeState}
          search={search}
          setSearch={setSearch}
          open={open}
        />
        <Dropdown isSearching={search} themeState={themeState}>
          <div className="dropdown-items">{search && usersJSX}</div>
        </Dropdown>
      </li>
      <li>
        <CurrentUserContainer isMenuShowing={open} />
      </li>
    </Ul>
  );
}

export default OpenNavBar;
