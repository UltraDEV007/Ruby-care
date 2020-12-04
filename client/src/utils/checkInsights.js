export const checkInsights = (params) => {
  if (params?.insights?.length === 0) {
    return <h1>{params?.name}&nbsp;has no insights</h1>;
  } else if (params?.insights.length === 1) {
    return <h1>{params?.insights?.length}&nbsp;Insight:</h1>;
  }
  return <h1>{params?.insights?.length}&nbsp;Insights:</h1>;
};
