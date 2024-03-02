import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./reducer/recipesReducer";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
