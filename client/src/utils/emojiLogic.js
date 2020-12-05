export const emojiLogic = (
  status,
  poorEmoji,
  okayEmoji,
  goodEmoji,
  greatEmoji
) => {
  if (status === "Poor") {
    return poorEmoji;
  }
  if (status === "Okay") {
    return okayEmoji;
  }
  if (status === "Good") {
    return goodEmoji;
  }
  if (status === "Great") {
    return greatEmoji;
  }
};
