import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import {
  checkInsights,
  checkedLikedInsights,
} from "../../../utils/checkInsights";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { goBack } from "../../../utils/goBack";
import { toTitleCase } from "../../../utils/toTitleCase";
import { getAge } from "../../../utils/getAge";
import Wrapper from "./styledUserDetail";
import LinearProgressLoading from "../../../components/Loading/LinearProgressLoading";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

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

  const INSIGHTS = user?.insights?.map((insight) => (
    <Link
      key={insight.id}
      className="insights-link"
      to={`./../insights/${insight.id}`}>
      {insight?.title}
    </Link>
  ));

  const LIKED_INSIGHTS = React.Children.toArray(
    user?.liked_insights?.map((likedInsight) => (
      <Link
        className="insights-link"
        to={`./../insights/${likedInsight.insight_id}`}>
        {likedInsight?.title}
      </Link>
    ))
  );

  if (!loaded) {
    return <LinearProgressLoading darkMode={darkMode} />;
  }

  const userDate = user?.created_at?.toLocaleString();

  return (
    <Wrapper darkMode={darkMode}>
      <div className="content-container">
        <div className="title-container">
          <div className="arrow-container">
            <IconButton className="arrow-icon" onClick={goBack}>
              <ArrowBackIcon className="arrow-icon" />
            </IconButton>
          </div>
          <Typography className="title">
            {!user?.image && <AccountCircleIcon className="user-icon" />}
            {user?.name}
          </Typography>
          {user?.image && (
            <img className="user-image" src={user?.image} alt={user?.name} />
          )}
          <Typography className="age">
            Age: {getAge(user?.birthday)} years old
          </Typography>
          <Typography className="gender">
            Gender: {toTitleCase(user.gender)}
          </Typography>
          <Typography className="date">
            Joined:&nbsp;
            <Moment format="dddd, MMMM Do yyyy">{userDate}</Moment>
          </Typography>
        </div>
        <hr className="top-hr" />
        <div className="inner-column">
          <div className="check-insights">{checkInsights(user)}</div>
          <div className="insights-container">{INSIGHTS}</div>
          <div className="check-likes">{checkedLikedInsights(user)}</div>
          <div className="likes-container">{LIKED_INSIGHTS}</div>
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
