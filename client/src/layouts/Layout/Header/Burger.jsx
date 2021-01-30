import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import OpenNavBar from "./OpenNavBar";
import { yellow, blue } from "@material-ui/core/colors";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 999;
  justify-content: space-around;
  flex-flow: column nowrap;
  display: none;

  &:hover {
    cursor: pointer;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    box-shadow: 0px 0.1px 1.5px 0.5px #999999;
    background-color: ${({ isLight }) => (isLight ? "#fff" : "#000")};

    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (max-width: 959px) {
    display: flex;
  }
`;

const Burger = ({ open, setOpen, search, setSearch, handleLogout }) => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <StyledBurger
        open={open}
        isLight={darkMode === "light"}
        setOpen={setOpen}
        onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <OpenNavBar
        open={open}
        setOpen={setOpen}
        handleLogout={handleLogout}
        setSearch={setSearch}
        search={search}
      />
    </>
  );
};
export default Burger;
