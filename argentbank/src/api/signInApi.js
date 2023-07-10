import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkLoggedInStatus = () => {
  return localStorage.getItem("IsLoggedIn") === "true";
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios
      .post("http://localhost:3001/api/v1/user/login", userCredentials)
      .catch(function (error) {
        console.log(error);
        if (error.message === "Request failed with status code 400") {
          alert(
            "There is an issue with either your password or your email, please try again"
          );
        } else {
        }
      });
    const response = await request.data.data;
    localStorage.setItem("IsLoggedIn", "true");

    return response;
  }
);
