import Layout from "../../../layouts/Layout/Layout";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

// Context
import { useContext, useState, useEffect } from "react";
import { useStateValue } from "../../../context/CurrentUserContext";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import {
  AllUsersDispatchContext,
  AllUsersStateContext,
} from "../../../context/AllUsersContext";

// Services and Utils
import { getAge } from "../../../utils/getAge";
import { destroyUser, putUser } from "../../../services/users";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import { removeToken } from "../../../services/auth";

// Views
import UserEdit from "../../../components/Dialogs/UserDialogs/UserEdit";
import UserDelete from "../../../components/Modals/UserDelete";

// Components and Icons
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";

// Styles
import { useStyles } from "./settingStyles";

export default function Settings() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [themeState, setThemeState] = useContext(ThemeStateContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { allUsers } = useContext(AllUsersStateContext);
  const dispatchAllUsers = useContext(AllUsersDispatchContext);

  const history = useHistory();

  const handleUpdate = async (id, userData) => {
    userData.email = userData?.email?.toLowerCase();
    const updatedUser = await putUser(id, userData);
    let users = [...allUsers];
    const index = users.findIndex((u) => u.id === updatedUser.id);
    if (index > -1) {
      dispatch({ type: "EDIT_USER", currentUser: updatedUser });
      users.splice(index, 1);
      await dispatchAllUsers({ type: "USER_UPDATED", payload: userData });
    }
  };

  const onSave = (formData, id) => {
    handleUpdate(formData, id);
    setOpenEdit(false);
  };

  const handleOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleDelete = async (id) => {
    await destroyUser(id);

    dispatchAllUsers({ type: "USER_REMOVED", payload: currentUser });

    dispatch({ type: "REMOVE_USER" });
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  const classes = useStyles({ themeState });

  // useState assigns a default value for a variable, an annonymous function is used to set the default value,
  // we have to use an annonymous funciton because the initial value is decided based on the logic for lines 63-68
  const [switchState, setSwitchState] = useState(() => {
    let state = localStorage.getItem("switchState");
    if (state !== null) {
      return state === "true" ? true : false;
    }
    return false;
  });

  useEffect(() => {
    // if people are exploiting with application window.
    let existingPreference = localStorage.getItem("themeState");
    if (existingPreference) {
      existingPreference.match(/^light$/i)
        ? setSwitchState(false)
        : setSwitchState(true);
    } else {
      setSwitchState(false);
      localStorage.setItem("switchState", "false");
    }
  }, []);

  const handleThemeChange = () => {
    setSwitchState(switchState === true ? false : true);

    if (themeState === "light") {
      setThemeState("dark");
      localStorage.setItem("themeState", "dark");
      localStorage.setItem("switchState", true);
    } else {
      setThemeState("light");
      localStorage.setItem("themeState", "light");
      localStorage.setItem("switchState", false);
    }
  };

  // have to do this instead of using "currentUser" in order to avoid a bug
  // where the date changes to current time when updating the user.
  const userDate = allUsers.find((user) => user.id === Number(currentUser.id))
    ?.created_at;

  return (
    <Layout title="Settings">
      <ScrollToTopOnMount />
      <div className={classes.userContainer}>
        <Typography className={classes.accountTitle}>Your Account</Typography>
        {currentUser?.image && (
          <img
            className={classes.userImage}
            src={currentUser?.image}
            alt={currentUser?.name}
          />
        )}
        <Typography className={classes.userText}>
          <strong>Name:</strong>&nbsp;{currentUser?.name}
        </Typography>
        <Typography className="birthday">
          <strong>Date of Birth:</strong>&nbsp;
          <Moment format="MM/DD/YY">{currentUser?.birthday}</Moment>
        </Typography>
        <Typography className="birthday">
          <strong>Age:</strong>&nbsp;
          {getAge(currentUser?.birthday)} years old
        </Typography>
        <Typography className={classes.userText}>
          <strong>Gender:</strong>&nbsp;{currentUser?.gender}
        </Typography>
        <Typography className={classes.userText}>
          <strong>Email:</strong>&nbsp;{currentUser?.email}
        </Typography>
        <Typography>
          <strong>Joined:</strong>&nbsp;
          <Moment format="dddd, MMMM Do yyyy">{userDate}</Moment>
        </Typography>
      </div>

      <Button
        className={classes.manage}
        onClick={handleOpen}
        variant="contained"
        color="primary">
        Edit Account
      </Button>
      <Button
        className={classes.manage}
        onClick={() => setIsDeleteOpen((prevState) => !prevState)}
        variant="contained"
        color="primary">
        Delete Account
      </Button>
      <hr />
      <br />
      <div className={classes.root}>
        <Typography className={classes.categories}>Preferences</Typography>
        <div className="card-actions">
          <Card className={classes.card}>
            <CardActions className={classes.actionsContainer}>
              <Typography className={classes.themeStateContainer}>
                <Brightness4Icon className={classes.themeStateIcon} />
                &nbsp;Dark mode
              </Typography>
              <Switch
                className={classes.themeStateSwitch}
                checked={switchState}
                onChange={handleThemeChange}
              />
            </CardActions>
          </Card>
        </div>
      </div>
      {openEdit && (
        <UserEdit
          allUsers={allUsers}
          onSave={onSave}
          currentUser={currentUser}
          handleOpen={handleOpen}
          handleUpdate={handleUpdate}
          handleClose={handleClose}
        />
      )}
      {isDeleteOpen && (
        <UserDelete
          currentUser={currentUser}
          handleDelete={handleDelete}
          openDelete={isDeleteOpen}
          setOpenDelete={setIsDeleteOpen}
        />
      )}
    </Layout>
  );
}
