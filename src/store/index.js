import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import categoriesReducer from "./features/categoriesSlice";
import discountReducer from "./features/discountSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    discount: discountReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.MODE !== "production",
});

export default store;
