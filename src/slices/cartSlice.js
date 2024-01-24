import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: [],
  qty: 1,
  totalQantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const item = state.cart.find((item) => item._id === action.payload._id);

      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push(action.payload);
        toast.success(`${action.payload.name} added to the cart`);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
      state.qty++;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity--;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart([]);
    },
  },
});

export const { addItems, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
