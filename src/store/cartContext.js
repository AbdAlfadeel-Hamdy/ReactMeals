import React from "react";

const cartContext = React.createContext({
  orderedMeals: [],
  total: 0,
  changeOrderedMealsHandler: () => 1,
});

export default cartContext;
