import "./nav.css";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLogIn } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/userSlice";

function Nav() {
  const user = useSelector(selectLogIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // DISPLAYING SIGN IN OR SIGN OUT DEPENDING OF IF CONNECTED
  const isConnected = () => {
    if (user.isLoggedIn === true) {
      return true;
    } else {
      return false;
    }
  };

  // SIGNING OUT
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
    localStorage.removeItem("IsLoggedIn", "true");
    localStorage.removeItem("token");
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
        {isConnected() === true ? null : (
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign in
          </Link>
        )}
        {isConnected() === false ? null : (
          <Link to="/" className="main-nav-item" onClick={handleLogOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}
export default Nav;
