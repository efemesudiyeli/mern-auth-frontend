import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-screen flex flex-row items-center py-2 justify-around bg-white text-[#7252d3]">
      <div className="text-3xl">Logo</div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profil</Link>
          </li>
        </ul>
      </div>
      <div onClick={logOut}>Çıkış Yap</div>
    </div>
  );
}
