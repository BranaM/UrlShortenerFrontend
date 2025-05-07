import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "../features/url/UrlSlice";

export const store = configureStore({
  reducer: {
    url: urlReducer,
  },
});
