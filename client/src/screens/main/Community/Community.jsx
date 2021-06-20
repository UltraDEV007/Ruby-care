import Layout from "../../../layouts/Layout/Layout";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import Div from "./styledCommunity";
import { useContext } from "react";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Users from "../../../components/CommunityComponents/Users";
import Feed from "../../../components/CommunityComponents/Feed";
import { indigo, blue } from "@material-ui/core/colors";

export default function Community({ usersAreLoading, allUsers }) {
  const [themeState] = useContext(ThemeStateContext);

  let isDark = themeState === "dark";

  return (
    <Layout title="Community">
      <ScrollToTopOnMount />
      <Div themeState={themeState}>
        {!usersAreLoading ? (
          <div className="separator-div">
            <Grid
              item
              xs={2}
              style={{
                padding: "10px",
              }}
            >
              <Users usersAreLoading={usersAreLoading} allUsers={allUsers} />
            </Grid>
            <div
              className="separator"
              style={{
                width: 1,
                backgroundColor: isDark ? indigo[50] : blue[600],
                minHeight: "100vh",
              }}
            />
          </div>
        ) : (
          <Grid item xs={3} />
        )}
        <Grid item xs={6}>
          {usersAreLoading ? (
            <>
              <p className="loading-title">Loading...</p>
              <LinearProgress style={{ margin: "50px auto", width: "30vw" }} />
            </>
          ) : (
            <Feed
              items={allUsers}
              action="commented"
              name="Comments"
              attribute="comments"
              type="comment"
            />
          )}
        </Grid>
        <Grid
          item
          xs={3}
          className="separator-div"
          style={{ justifyContent: "flex-start" }}
        >
          <div
            className="separator"
            style={{
              width: 1,
              backgroundColor: isDark ? indigo[50] : blue[600],
              minHeight: "100vh",
            }}
          />
          <div style={{ marginLeft: "10px", padding: "10px" }}>
            <Feed
              name="Likes"
              items={allUsers}
              attribute="liked_insights"
              action="liked"
              type="like"
            />
          </div>
        </Grid>
      </Div>
    </Layout>
  );
}
