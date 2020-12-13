import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { checkInsights } from "../../../utils/checkInsights";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { goBack } from "../../../utils/goBack";
import { toTitleCase } from "../../../utils/toTitleCase";
import { getAge } from "../../../utils/getAge";
import Wrapper from "./styledUserDetail";
import LinearProgressLoading from "../../../components/Loading/LinearProgressLoading";

export default function UserDetail({ getOneUser }) {
  const [user, setUser] = useState(null);
  const [darkMode] = useContext(DarkModeContext);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const getUser = await getOneUser(id);
      setUser(getUser);
      setLoaded(true);
    };
    getData();
  }, [getOneUser, id]);

  const INSIGHTS = React.Children.toArray(
    user?.insights?.map((insight) => (
      <Link className="insights-link" to={`./../insights/${insight.id}`}>
        {insight?.title}
      </Link>
    ))
  );

  if (!loaded) {
    return <LinearProgressLoading darkMode={darkMode} />;
  }

  return (
    <Wrapper darkMode={darkMode}>
      <div className="content-container">
        <div className="title-container">
          <Typography className="title">
            <AccountCircleIcon className="user-icon" />
            {user?.name}
          </Typography>
          <Typography className="age">
            Age: {getAge(user?.birthday)} years old
          </Typography>
          <Typography className="gender">
            Gender: {toTitleCase(user.gender)}
          </Typography>
          Joined:&nbsp;
          <Moment format="dddd, MMMM Do yyyy">
            <small>{user?.created_at}</small>
          </Moment>
        </div>
        <hr className="top-hr" />
        <div className="body">
          <div className="check-insights">{checkInsights(user)}</div>
          <div className="insights-container">{INSIGHTS}</div>
        </div>
        <br />
        <br />
        <hr className="bottom-hr" />
        <div className="buttons">
          <Button variant="contained" color="secondary" onClick={goBack}>
            Go Back
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
