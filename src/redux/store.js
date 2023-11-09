import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import measuresReducer from "./measuresSlice";

export const store = configureStore({
   reducer: {
      user: userReducer,
      measures: measuresReducer,
   },
});
