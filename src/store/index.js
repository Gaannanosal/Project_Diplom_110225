import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import categoriesReducer from "./features/categoriesSlice";
import discountReducer from "./features/discountSlice";
import cartReducer from "./features/cartSlice";
import productsCategoryReducer from "./features/productsCategorySlice";

const loadFromLocalStorage = (key, value) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : value;
  } catch (e) {
    console.error(`Failed to load ${key} from localStorage:`, e);
    return value;
  }
};

const preloadedState = {
  cart: { cart: loadFromLocalStorage("cart", []) },
  products: {
    products: [],
    likedProducts: loadFromLocalStorage("likedProducts", []),
    loading: false,
    error: null,
  },
};

const store = configureStore({
  reducer: {
    products: productsReducer,
    productsCategory: productsCategoryReducer,
    categories: categoriesReducer,
    discount: discountReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.cart));
    localStorage.setItem(
      "likedProducts",
      JSON.stringify(state.products.likedProducts)
    );
  } catch (error) {
    console.error("Error saving date to localStorage", error);
  }
});
export default store;
