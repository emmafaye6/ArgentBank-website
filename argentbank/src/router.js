import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home.js";
import User from "./pages/user.js";
import Signin from "./pages/signin/signin.js";
import PageNotFound from "./pages/pagenotfound.js";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/user" element={<User />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default Router;
