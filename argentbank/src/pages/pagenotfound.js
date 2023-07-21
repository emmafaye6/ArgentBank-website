import { useEffect } from "react";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";
import "../../src/styles/index.css";

function PageNotFound() {
  useEffect(() => {
    document.title = "Argent Bank - Page not found";
  }, []);

  return (
    <Layout>
      <div className="error">
        <h1>404</h1>
        <h2>Oops. The page you asked for doesn't seem to exist.</h2>
        <Link to="/" className="error__link">
          Go back to home page
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
