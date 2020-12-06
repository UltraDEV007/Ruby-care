import RestaurantIcon from "@material-ui/icons/Restaurant";

export const foodRegex = /avocado|chicken|hamburger|burger|(^cheese$)|pizza|cheeseburger|steak|meat|milk|bacon|rice/;

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
};

export const foodNameJSX = (food) => {
  const result = food.name.toLowerCase().trim().match(foodRegex);
  if (result) {
    return (
      <>
        {foodMap[result[0]]}
        <span role="img" aria-label={food.name}>
          &#8199;{food.name}
        </span>
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
