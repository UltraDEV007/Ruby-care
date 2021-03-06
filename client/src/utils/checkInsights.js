export const checkInsights = (user) => {
  if (user?.insights?.length === 0) {
    return <h1>{user?.name}&nbsp;has no insights</h1>;
  } else if (user?.insights.length === 1) {
    return <h1>{user?.insights?.length}&nbsp;Insight:</h1>;
  }
  return <h1>{user?.insights?.length}&nbsp;Insights:</h1>;
};

export const checkLikedInsights = (user) => {
  if (user?.liked_insights?.length === 0) {
    return <></>;
  } else if (user?.liked_insights.length === 1) {
    return <h1>{user?.liked_insights?.length}&nbsp;Liked Insight:</h1>;
  }
  return <h1>{user?.liked_insights?.length}&nbsp;Liked Insights:</h1>;
};
