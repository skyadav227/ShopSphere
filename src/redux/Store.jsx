import { configureStore } from "@reduxjs/toolkit";
import cartOper from "./cart/CartSlice"

export default configureStore({
  reducer: {
    cart: cartOper
  }
})