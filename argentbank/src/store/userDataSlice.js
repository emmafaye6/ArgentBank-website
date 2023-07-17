import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    saveUserData: (state, action) => {
      state = action.payload;
      return state;
    },
    editUserName: (state, action) => {
      state.userName = action.payload;
    },
    removeUserData: (state) => {
      state = {};
      return state;
    },
  },
});

export const { saveUserData, editUserName, removeUserData } =
  userDataSlice.actions;
