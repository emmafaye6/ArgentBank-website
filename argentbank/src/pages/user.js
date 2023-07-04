import { useEffect } from "react";
import Layout from "../components/home/layout";
import Accounts from "../components/user/accounts";
import UserHeader from "../components/user/header";

function User() {
  useEffect(() => {
    document.title = "Argent Bank - User Page";
  }, []);
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
