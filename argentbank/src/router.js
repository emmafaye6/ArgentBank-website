import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home.js";
import User from "./pages/user.js";
import Signin from "./pages/signin.js";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default Router;
