import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../../store/selectors";
import { toggleEdit } from "../../store/editUserSlice.js";
import { editUserName } from "../../store/userDataSlice.js";
import Button from "../layout/button";
import "./formEdit.css";

export function FormEdit() {
  const [userName, setUserName] = useState("");
  const [editSuccess, setEditSuccess] = useState(false);
  const [editError, setEditError] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const firstName = userData.firstName;
  const lastName = userData.lastName;

  const token = localStorage.getItem("token");

  const editUsername = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          userName: userName,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const editData = await response.data;
      console.log(editData);
      dispatch(editUserName(editData.body.userName));

      if (response.status === 200) {
        setEditSuccess(true);
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Error message:", error.response.data.message);
      } else if (error.request) {
        console.error("No response received from the server.");
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = /^[0-9A-Za-z\s\-]+$/;
    setEditSuccess(false);
    if (check.test(userName)) {
      editUsername();
      setUserName("");
    } else {
      setEditError(true);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(toggleEdit());
    setUserName("");
  };

  const editSuccessMessage = () => {
    if (editSuccess) {
      return (
        <p className="successmessage">
          Modification du nom d'utilisateur réussie!
        </p>
      );
    }
  };
  const editErrorMessage = () => {
    if (!editSuccess) {
      return (
        <p className="errormessage">
          Votre nom d'utilisateur ne peut pas contenir de caractères spéciaux,
          veuillez rééssayer
        </p>
      );
    }
  };
  return (
    <div className="editform--container">
      {editSuccess === true ? editSuccessMessage() : null}
      {editError === true ? editErrorMessage() : null}
      <form type="submit" onSubmit={handleSubmit} className="form">
        <div className="editform--input-wrapper">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="editform--input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" value={firstName} disabled />
        </div>
        <div className="editform--input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" value={lastName} disabled />
        </div>
        <div className="buttonwrapper">
          <Button className="edit-button" type="submit">
            Save
          </Button>
          <Button className="edit-button" onClick={handleClick}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
