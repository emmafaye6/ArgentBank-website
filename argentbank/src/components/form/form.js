import { useDispatch, useSelector } from "react-redux";
import Button from "../layout/button.js";
import "./form.css";
import { useState } from "react";
import { loginUser } from "../../api/signInApi.js";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.user);

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setEmail("");
        setPassword("");
        navigate("/user");
      }
    });
  };
  return (
    <form onSubmit={handleLoginEvent}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Button className="sign-in-button" type="submit">
        {loading ? "Loading..." : "Login"}
      </Button>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
export default Form;
