import { configureStore } from "@reduxjs/toolkit";
import OrderSystem from "../OrderSystem";
import menuReducer from "../Reducers/MenuReducer";
import stationReducer from "../Reducers/stationReducer";
const store = configureStore({
  reducer: {
    order: OrderSystem,
    menu: menuReducer,
    station: stationReducer,
  },
});

export default store;
