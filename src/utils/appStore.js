import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices";
import mapReducer from "./mapSlices";

const appStore = configureStore({
  reducer: {
    cart:cartReducer,
    map:mapReducer,
    // other reducers if any
  }
});
export default appStore;
