import "./nav.css";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLogIn } from "../../store/selectors";

function Nav() {
  const user = useSelector(selectLogIn);

  const isConnected = () => {
    if (user.isLoggedIn === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          {isConnected() ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
