import { useContext } from "react";
import { ThemeStateContext } from "../../../components/Context/ThemeStateContext";
import OpenNavBar from "./OpenNavBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  burgerIcon: {
    width: "2rem",
    height: "2rem",
    position: "relative",
    top: 0,
    right: 0,
    zIndex: 999,
    justifyContent: "space-around",
    flexFlow: "column nowrap",
    display: "none",

    "&:hover": {
      cursor: "pointer",
    },

    "& > *": {
      width: "2rem",
      height: "0.25rem",
      boxShadow: "0px 0.1px 1.5px 0.5px #999999",
      backgroundColor: ({ isLight }) => (isLight ? "#fff" : "#000"),
      borderRadius: "10px",
      transformOrigin: "1px",
      transition: "all 0.3s linear",
      "&:nth-child(1)": {
        transform: ({ open }) => (open ? "rotate(45deg)" : "rotate(0)"),
      },
      "&:nth-child(2)": {
        transform: ({ open }) => (open ? "translateX(100%)" : "translateX(0)"),
        opacity: ({ open }) => (open ? 0 : 1),
      },
      "&:nth-child(3)": {
        transform: ({ open }) => (open ? "rotate(-45deg)" : "rotate(0)"),
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

const Burger = ({ open, setOpen, search, setSearch, usersJSX }) => {
  const [themeState] = useContext(ThemeStateContext);
  const classes = useStyles({ open, isLight: themeState === "light" });

  return (
    <>
      <div className={classes.burgerIcon} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <OpenNavBar
        open={open}
        usersJSX={usersJSX}
        setOpen={setOpen}
        setSearch={setSearch}
        search={search}
      />
    </>
  );
};
export default Burger;
