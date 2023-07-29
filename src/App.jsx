import { Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  axios.defaults.baseURL =
    "https://mern-jwt-authentication-production.up.railway.app";

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Protected */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/profile" element={<ProfilePage />}></Route>
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
