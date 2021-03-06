export default function getRating(ratingParam, iconParam) {
  return Array(ratingParam)
    .fill()
    .map(() => (
      <span role="img" aria-label="rating">
        {iconParam}&#8199;
      </span>
    ));
}
