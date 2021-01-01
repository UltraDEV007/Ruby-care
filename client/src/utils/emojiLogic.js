import GoodEmoji from "../components/MoodComponents/Emojis/GoodEmoji";
import GreatEmoji from "../components/MoodComponents/Emojis/GreatEmoji";
import OkayEmoji from "../components/MoodComponents/Emojis/OkayEmoji";
import PoorEmoji from "../components/MoodComponents/Emojis/PoorEmoji";

export const emojiLogic = (status) => {
  if (status === "Poor") {
    return <PoorEmoji />;
  }
  if (status === "Okay") {
    return <OkayEmoji />;
  }
  if (status === "Good") {
    return <GoodEmoji />;
  }
  if (status === "Great") {
    return <GreatEmoji />;
  }
};
