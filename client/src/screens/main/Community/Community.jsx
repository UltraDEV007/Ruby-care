// hooks
import { useContext, useState } from "react";
import { useMediaQuery } from "@material-ui/core";

// components
import Layout from "../../../layouts/Layout/Layout";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import Div from "./styledCommunity";
import Users from "../../../components/CommunityComponents/Users";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Feed from "../../../components/CommunityComponents/Feed";

// context
import { ThemeStateContext } from "../../../context/ThemeStateContext";

// utils
import { indigo, blue } from "@material-ui/core/colors";

export default function Community({ usersAreLoading, allUsers }) {
  const [themeState] = useContext(ThemeStateContext);
  const [viewMode, setViewMode] = useState("comments");

  let isDark = themeState === "dark";
  const isLargeScreen = useMediaQuery("(max-width:1300px)");

  return (
    <Layout title="Community">
      <ScrollToTopOnMount />

      <Div themeState={themeState}>
        {!isLargeScreen && (
          <div className="top-view-btns">
            {viewMode === "comments" ? (
              <div className="link-2" onClick={() => setViewMode("likes")}>
                view likes
              </div>
            ) : (
              <div className="link-2" onClick={() => setViewMode("comments")}>
                view comments
              </div>
            )}
          </div>
        )}
        {!usersAreLoading ? (
          isLargeScreen && (
            <div className="separator-div" id="community-users">
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
          )
        ) : (
          <Grid item xs={3} />
        )}
        <Grid item xs={6}>
          {usersAreLoading ? (
            <>
              <p className="loading-title">Loading...</p>
              <LinearProgress style={{ margin: "50px auto", width: "30vw" }} />
            </>
          ) : isLargeScreen ? (
            <Feed
              items={allUsers}
              action="commented"
              name="Comments"
              attribute="comments"
              type="comment"
            />
          ) : viewMode === "comments" ? (
            <Feed
              items={allUsers}
              action="commented"
              name="Comments"
              attribute="comments"
              type="comment"
            />
          ) : (
            <Feed
              items={allUsers}
              action="liked"
              name="Likes"
              attribute="liked_insights"
              type="like"
            />
          )}
        </Grid>
        {isLargeScreen && (
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
        )}
      </Div>
    </Layout>
  );
}
