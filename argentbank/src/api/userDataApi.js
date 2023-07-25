import axios from "axios";

const token = localStorage.getItem("token");

export const fetchUserInfo = async (isLogging) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${isLogging}`,
        },
      }
    );

    return await response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
