import { useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/styles";
import { yellow, indigo } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteInsight from "../Modals/DeleteInsight";

function InsightCard({
  insight,
  handleDelete,
  handleOpen,
  handleClose,
  openDelete,
  onDelete,
  darkMode,
  updated,
  users,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "20px auto",
      minWidth: "300px",
      width: "300px",
      minHeight: "240px",
      padding: "20px",
      borderRadius: 0,
      boxShadow:
        darkMode === "light" ? "default" : `-1px .5px 4px 2.5px ${indigo[50]}`,
      [theme.breakpoints.up("md")]: {
        minWidth: "350px",
        width: "350px",
        padding: "20px",
        margin: "20px",
      },
      [theme.breakpoints.up("lg")]: {
        minWidth: "500px",
        width: "500px",
        padding: "30px",
        margin: "20px",
      },
      [theme.breakpoints.up("xl")]: {
        minWidth: "550px",
        width: "550px",
        padding: "30px",
        margin: "20px",
      },
    },
    link: {
      textDecoration: "none",
    },
    title: {
      color: darkMode === "dark" ? yellow[700] : "#000",
      fontWeight: "bold",
      fontSize: "24px",
    },
    userContainer: {
      display: "flex",
      padding: "10px 0 3px 0",
      alignItems: "center",
    },
    userName: {
      color: darkMode === "dark" ? yellow[700] : "#424242",
      fontWeight: "bold",
      fontSize: "19px",
    },
    userIcon: {
      color: darkMode === "dark" ? yellow[700] : "#424242",
      marginRight: "8px",
    },
    buttons: {
      marginTop: "20px",
    },
    delete: {
      marginLeft: "20px",
    },
  }));
  const [currentUser] = useContext(CurrentUserContext);
  const classes = useStyles();

  const oneUser = users.find((user) => {
    return user;
  });

  return (
    <>
      <Card className={classes.root}>
        <Link className={classes.link} to={`/insights/${insight?.id}`}>
          <Typography className={classes.title}>{insight?.title}</Typography>
        </Link>
        <div className={classes.userContainer}>
          <Link className={classes.link} to={`/users/${oneUser?.id}`}>
            <AccountCircleIcon className={classes.userIcon} />
            <Typography className={classes.userName}>
              {insight?.user?.name ? insight?.user?.name : <>Anonymous</>}
            </Typography>
          </Link>
        </div>
        {!updated ? (
          <>
            <Typography>
              Created at:&nbsp;
              <Moment format="MMM-DD-yyyy hh:mm A">
                {insight?.created_at}
              </Moment>
            </Typography>
          </>
        ) : (
          <>
            <Typography>
              Updated at:&nbsp;
              <Moment format="MMM-DD-yyyy hh:mm A">
                {insight?.updated_at}
              </Moment>
            </Typography>
          </>
        )}
        <Typography>{insight?.description}</Typography>
        {insight?.user_id === currentUser?.id && (
          <>
            <div className={classes.buttons}>
              <Link to={`/insights/${insight.id}/edit`}>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                className={classes.delete}
                variant="contained"
                color="secondary"
                onClick={handleOpen}
              >
                Delete
              </Button>
            </div>
          </>
        )}
      </Card>
      <DeleteInsight
        insight={insight}
        openDelete={openDelete}
        onDelete={onDelete}
        handleOpen={handleOpen}
        handleDelete={handleDelete}
        handleClose={handleClose}
      />
    </>
  );
}

export default InsightCard;
