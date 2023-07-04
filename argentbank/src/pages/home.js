import Layout from "../components/home/layout";
import Features from "../components/home/features/features";
import Hero from "../components/home/hero/hero.js";
import { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../styles/index.css";

function Home() {
  useEffect(() => {
    document.title = "Argent Bank - Home Page";
  }, []);
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
export default Home;
