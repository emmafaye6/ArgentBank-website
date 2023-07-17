// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useState } from "react";

// const token = localStorage.getItem("token");

// export const EditUsername = async () => {
//   const [userName, setUserName] = useState("");
//   const dispatch = useDispatch();
//   try {
//     const response = await axios.put(
//       "http://localhost:3001/api/v1/user/profile",
//       {
//         userName: userName,
//       },
//       {
//         headers: {
//           accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const editData = await response.data;
//     console.log(editData);

//     if (response.status === 200) {
//       //   setEditSuccess(true);
//     }
//   } catch (error) {
//     // Handle error
//     console.error(error);
//   }
// };
