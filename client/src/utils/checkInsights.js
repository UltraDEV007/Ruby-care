export const checkInsights = (user) => {
  if (user?.insights?.length === 0) {
    return <h1>{user?.name}&nbsp;has no insights</h1>;
  } else if (user?.insights.length === 1) {
    return <h1>{user?.insights?.length}&nbsp;Insight:</h1>;
  }
  return <h1>{user?.insights?.length}&nbsp;Insights:</h1>;
};
