//  we fill the array with  and iconParam is one individual icon
// console.log(Array(5).fill())
// [undefined, undefined, undefined, undefined, undefined]

// we are calling the map function to loop, we are not bothered about whats actually inside the array.
// because what we are repeating is being repeated in line #15
// console.log (Array(5).fill().map(() => '⭐'))
// ['⭐', '⭐', '⭐', '⭐', '⭐']

export default function ratingLogic(ratingParam, iconParam) {
  return Array(ratingParam)
    .fill()
    .map(() => (
      <span role="img" aria-label="star">
        {iconParam}
      </span>
    ));
}
