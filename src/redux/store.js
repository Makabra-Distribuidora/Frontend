import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import imageReducer from "./slices/imageSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    images: imageReducer,
  },
});
