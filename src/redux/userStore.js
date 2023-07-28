import { configureStore } from "@reduxjs/toolkit";
import { userSliced } from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userSliced,
  },
});
