// import { EditUsername } from "../../api/editUserApi.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../../store/selectors";
import { toggleEdit } from "../../store/editUserSlice.js";
import { editUserName } from "../../store/userDataSlice.js";

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
      // Handle error
      console.error(error);
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
        <p className="Successmessage">
          Modification du nom d'utilisateur réussie!
        </p>
      );
    }
  };
  const editErrorMessage = () => {
    if (!editSuccess) {
      return (
        <p className="Successmessage">
          Votre nom d'utilisateur ne peut pas contenir de caractères spéciaux,
          veuillez rééssayer
        </p>
      );
    }
  };
  return (
    <div className="editFormContainer">
      {editSuccess === true ? editSuccessMessage() : null}
      {editError === true ? editErrorMessage() : null}
      <form type="submit" onSubmit={handleSubmit}>
        <div className="editInfo_input-wrapper">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="editInfo_input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" value={firstName} disabled />
        </div>
        <div className="editInfo_input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" value={lastName} disabled />
        </div>
        <div className="buttonwrapper">
          <button className="" type="submit">
            Save
          </button>
          <button className="" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
