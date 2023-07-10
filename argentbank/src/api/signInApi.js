import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      userCredentials
    );
    const response = await request.data.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);
