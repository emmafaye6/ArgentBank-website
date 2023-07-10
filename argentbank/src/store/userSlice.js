import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/signInApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});
export default userSlice.reducer;
