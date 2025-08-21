import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./features/categoriesSlice";
import discountReducer from "./features/discountSlice"
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    discount:discountReducer
  },
});

export default store;
