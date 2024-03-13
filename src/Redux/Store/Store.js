import { configureStore } from "@reduxjs/toolkit";
import OrderSystem from "../OrderSystem";
const store = configureStore({
  reducer: {
    order: OrderSystem,
  },
});

export default store;
