import Button from "../layout/button";
import "../user/header.css";
import "../layout/button.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../../store/selectors";

function UserHeader() {
  const userData = useSelector(selectUserData);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${userData.firstName} ${userData.lastName}`}
      </h1>
      <Button className="edit-button">Edit Name</Button>
    </div>
  );
}
export default UserHeader;
