import Button from "../layout/button";
import "../user/header.css";
import "../layout/button.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, selectEditUser } from "../../store/selectors";
import { toggleEdit } from "../../store/editUserSlice.js";
import { FormEdit } from "../user/formEdit.js";
import GetUserInfo from "../../api/userDataApi";

function UserHeader() {
  GetUserInfo();
  const userData = useSelector(selectUserData);
  const editData = useSelector(selectEditUser);
  const dispatch = useDispatch();

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
