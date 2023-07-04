import Button from "./button";
import "../user/header.css";
import "../user/button.css";

function UserHeader() {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Button className="edit-button">Edit Name</Button>
    </div>
  );
}
export default UserHeader;
