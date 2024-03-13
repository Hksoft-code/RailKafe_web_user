import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const ordersystem = createSlice({
  name: "order",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.cart.push(tempvar);
      }
      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.quantity * item.selling_price,
        0
      );
    },
    RemoveFromCart: (state, action) => {
      const findIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex !== -1) {
        if (state.cart[findIndex].quantity > 1) {
          state.cart[findIndex].quantity -= 1;
        } else {
          state.cart.splice(findIndex, 1);
        }
        state.totalQuantity = state.cart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice = state.cart.reduce(
          (total, item) => total + item.quantity * item.selling_price,
          0
        );
      }
    },
  },
});

export const { AddCart, RemoveFromCart } = ordersystem.actions;
export default ordersystem.reducer;
