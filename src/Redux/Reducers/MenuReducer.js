// reducers/menuReducer.js
const initialState = {
  restaurantName: "",
  stationName: "",
  minimumCost: 0,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTAURANT_NAME":
      return { ...state, restaurantName: action.payload };
    case "SET_STATION_NAME":
      return { ...state, stationName: action.payload };
    case "SET_MINIMUM_COST":
      return { ...state, minimumCost: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
