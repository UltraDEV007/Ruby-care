import { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    marginTop: "20px",
  },
});

function Footer() {
  const classes = useStyles();
  const routerMap = {
    0: "/",
    1: "/community",
    2: "/settings",
  };
  const history = useHistory();
  const [value, setValue] = useState(() => {
    if (history.location.pathname === "/community") {
      return 1;
    } else if (history.location.pathname === "/settings") {
      return 2;
    } else {
      return 0;
    }
  });

  return (
    <BottomNavigation
      value={value}
      onChange={(_event, newValue) => {
        history.push(routerMap[newValue]);
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Community" icon={<ForumIcon />} />
      <BottomNavigationAction label="Settings" icon={<MoreHorizIcon />} />
    </BottomNavigation>
  );
}

export default Footer;
