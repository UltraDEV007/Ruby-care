import Layout from "../../../layouts/Layout/Layout";
import Users from "./Users";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import Div from "./styledUsers";
import { useContext } from "react";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import { Link } from "react-router-dom";

export default function Community({ usersAreLoading, allUsers }) {
  const [themeState] = useContext(ThemeStateContext);

  return (
    <Layout title="Community">
      <ScrollToTopOnMount />
      <Div themeState={{ themeState }}>
        <div class="test"></div>
        <div class="users">
          <Users usersAreLoading={usersAreLoading} allUsers={allUsers} />
        </div>
        <div
          style={{ border: "1px solid red", height: "100vh", width: "25vw" }}
        >
          {allUsers.map((user) =>
            user.liked_insights.length ? (
              <div>
                {user.name} recently liked
                <Link to={`insights/${user.liked_insights[0].insight_id}`}>
                  {user.liked_insights[0].title}
                </Link>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </Div>
    </Layout>
  );
}
