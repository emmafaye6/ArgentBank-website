import Button from "../layout/button";
import "../user/header.css";
import "../layout/button.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, selectEditUser } from "../../store/selectors";
import { toggleEdit } from "../../store/editUserSlice.js";
import { FormEdit } from "../user/formEdit.js";
import { fetchUserInfo } from "../../api/userDataApi";
import { useEffect } from "react";
import { saveUserData } from "../../store/userDataSlice";

function UserHeader() {
  const userData = useSelector(selectUserData);
  const editData = useSelector(selectEditUser);
  const dispatch = useDispatch();
  const isLogging = localStorage.getItem("token");

  useEffect(() => {
    if (isLogging) {
      const getData = async () => {
        fetchUserInfo(isLogging).then((response) =>
          dispatch(saveUserData(response.data.body))
        );
      };
      getData();
    }
  }, [dispatch, isLogging]);

  return (
    <div className="header">
      {editData.open === true ? (
        <h1>Edit user info</h1>
      ) : (
        <h1>
          Welcome back
          <br />
          {`${userData.firstName} ${userData.lastName}`}
        </h1>
      )}
      {editData.open === true ? null : (
        <Button className="edit-button" onClick={() => dispatch(toggleEdit())}>
          Edit name
        </Button>
      )}

      {editData.open === true ? <FormEdit /> : null}
    </div>
  );
}
export default UserHeader;
