import { useEffect } from "react";
import Layout from "../components/layout/layout";
import Accounts from "../components/user/accounts";
import UserHeader from "../components/user/header";
import { useSelector } from "react-redux";
import { selectLogIn } from "../store/selectors";
import { Navigate } from "react-router-dom";

function User() {
  const user = useSelector(selectLogIn);
  const isConnected = () => {
    if (user.isLoggedIn === true) {
      return true;
    }
  };

  useEffect(() => {
    document.title = "Argent Bank - User Page";
  }, []);

  if (!isConnected()) {
    return <Navigate to="/signin" />;
  }
  return (
    <Layout>
      <div className="main bg-dark">
        <UserHeader />
        <Accounts />
      </div>
    </Layout>
  );
}
export default User;
