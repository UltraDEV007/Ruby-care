import Layout from "../../../layouts/Layout/Layout";
import Users from "./Users";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import Div from "./styledUsers";
import { useContext } from "react";
import { ThemeStateContext } from "../../../context/ThemeStateContext";

export default function Community({ usersAreLoading, allUsers }) {
  const [themeState] = useContext(ThemeStateContext);

  return (
    <Layout title="Community">
      <Div themeState={{ themeState }}>
        <ScrollToTopOnMount />
        <Users usersAreLoading={usersAreLoading} allUsers={allUsers} />
        <div>
          {allUsers.map((user) =>
            user.liked_insights.length ? (
              <>{`${user.name} recently liked ${user.liked_insights[0].title}`}</>
            ) : (
              ""
            )
          )}
        </div>
      </Div>
    </Layout>
  );
}
