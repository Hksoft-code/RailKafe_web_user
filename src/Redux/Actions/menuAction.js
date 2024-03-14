// actions/menuActions.js
export const setRestaurantName = (name) => ({
  type: "SET_RESTAURANT_NAME",
  payload: name,
});

export const setStationName = (name) => ({
  type: "SET_STATION_NAME",
  payload: name,
});

export const setMinimumCost = (cost) => ({
  type: "SET_MINIMUM_COST",
  payload: cost,
});
