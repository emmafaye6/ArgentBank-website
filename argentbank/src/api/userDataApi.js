import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUserData } from "../store/userDataSlice";

const token = localStorage.getItem("token");

export const GetUserInfo = async () => {
  const dispatch = useDispatch();
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(saveUserData(response.data.body));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
