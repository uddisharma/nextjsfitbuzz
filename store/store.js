import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import categoryReducer from "../slices/categorySlice";
import wishlistReducer from "../slices/wishlistSlice";
import userloginSlice from "../slices/userloginSlice";
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    category: categoryReducer,
    wishlist: wishlistReducer,
    user: userloginSlice,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
