import Footer from "./footer";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
