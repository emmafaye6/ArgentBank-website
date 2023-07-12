import { useEffect } from "react";
import Layout from "../components/layout/layout";
import Accounts from "../components/user/accounts";
import UserHeader from "../components/user/header";
import { useSelector } from "react-redux";
import { selectLogIn } from "../store/selectors";
import { Navigate } from "react-router-dom";
import { GetUserInfo } from "../api/userDataApi";

function User() {
  const user = useSelector(selectLogIn);

  const isConnected = () => {
    if (user.isLoggedIn === true) {
      GetUserInfo();
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    document.title = "Argent Bank - User Page";
  }, []);

  if (!isConnected()) {
    return <Navigate to="/signin" />;
  } else {
    return (
      <Layout>
        <div className="main bg-dark">
          <UserHeader />
          <Accounts />
        </div>
      </Layout>
    );
  }
}
export default User;
