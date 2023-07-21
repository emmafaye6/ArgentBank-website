import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkLoggedInStatus = () => {
  return localStorage.getItem("IsLoggedIn") === "true";
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const request = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userCredentials
      );

      const token = request.data.body.token;
      const response = request.data.data;
      localStorage.setItem("IsLoggedIn", "true");
      localStorage.setItem("token", token);
      return response;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.error("Invalid credentials");
        } else {
          console.error("There seems to be a problem. Please try again.");
        }
      } else if (error.request) {
        console.error("No response received from the server.");
      } else {
        console.error("Network error. Please check your internet connection.");
      }
    }
  }
);
