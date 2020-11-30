import React from "react";
import Moods from "../components/MoodComponents/Moods.jsx";

export default function MoodsContainer() {
  const allMoods = [
    {
      status: "okay",
      created_at: "11-20-2020 4:01PM"
    },
    {
      status: "poor",
      created_at: "11-20-2020 4:01PM"
    },
    {
      status: "good",
      created_at: "11-20-2020 4:01PM"
    },
    {
      status: "great",
      created_at: "11-20-2020 4:01PM"
    }
  ];

  return (
    <>
      <Moods allMoods={allMoods} />
    </>
  );
}
