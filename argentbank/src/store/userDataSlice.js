import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    saveUserData: (state, action) => {
      state = action.payload;
      return state;
    },
    removeUserData: (state) => {
      state = {};
      return state;
    },
  },
});

export const { saveUserData, removeUserData } = userDataSlice.actions;
