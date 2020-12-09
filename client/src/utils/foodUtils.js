import RestaurantIcon from "@material-ui/icons/Restaurant";

export const foodRegex = /avocado|chicken|hamburger|burger|(^cheese$)|pizza|cheeseburger|steak|meat|milk|bacon|rice|pork|soup|taco|apple|pasta|spaghetti|falafel/;

export const foodMap = {
  avocado: "🥑",
  chicken: "🍗",
  hamburger: "🍔",
  cheeseburger: "🍔",
  cheese: "🧀",
  pizza: "🍕",
  steak: "🥩",
  meat: "🍖",
  milk: "🥛",
  bacon: "🥓",
  rice: "🍚",
  pork: "🐖",
  soup: "🍲",
  taco: "🌮",
  apple: "🍎",
  pasta: "🍝",
  spaghetti: "🍝",
  falafel: "🧆",
};

export const foodNameJSX = (food) => {
  const result = food.name.toLowerCase().trim().match(foodRegex);
  if (result) {
    return (
      <>
        <span role="img" aria-label={food.name}>
          {foodMap[result[0]]}
        </span>
        &#8199;{food.name}
      </>
    );
  } else {
    return (
      <>
        <RestaurantIcon />
        &nbsp;{food.name}
      </>
    );
  }
};
