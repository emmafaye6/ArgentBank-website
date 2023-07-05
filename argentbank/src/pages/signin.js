import Layout from "../components/home/layout";
import "./signin.css";
import { useEffect } from "react";
import Form from "../components/signin/form";

function Signin() {
  useEffect(() => {
    document.title = "Argent Bank - Home Page";
  }, []);
  return (
    <Layout>
      <div className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </div>
    </Layout>
  );
}
export default Signin;
