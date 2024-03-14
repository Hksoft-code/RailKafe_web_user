import { configureStore } from "@reduxjs/toolkit";
import OrderSystem from "../OrderSystem";
import menuReducer from "../Reducers/MenuReducer";
const store = configureStore({
  reducer: {
    order: OrderSystem,
    menu: menuReducer,
  },
});

export default store;
