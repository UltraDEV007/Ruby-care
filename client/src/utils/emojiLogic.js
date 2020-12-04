export const emojiLogic = (
  status,
  greatEmoji,
  poorEmoji,
  okayEmoji,
  goodEmoji
) => {
  if (status === "Great") {
    return greatEmoji;
  }
  if (status === "Poor") {
    return poorEmoji;
  }
  if (status === "Okay") {
    return okayEmoji;
  }
  if (status === "Good") {
    return goodEmoji;
  }
};
