import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUserData } from "../store/userDataSlice";
import { useEffect } from "react";

const GetUserInfo = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const fetchUserInfo = async () => {
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

  useEffect(() => {
    fetchUserInfo();
  }, [token]);
};

export default GetUserInfo;
