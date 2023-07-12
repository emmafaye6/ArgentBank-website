import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { userDataSlice } from "./userDataSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userData: userDataSlice.reducer,
  },
});

export default store;
