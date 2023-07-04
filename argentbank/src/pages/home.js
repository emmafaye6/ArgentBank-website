import Layout from "../components/home/layout";
import { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../styles/index.css";

function Home() {
  useEffect(() => {
    document.title = "Argent Bank - Home Page";
  }, []);
  return <Layout></Layout>;
}
export default Home;
