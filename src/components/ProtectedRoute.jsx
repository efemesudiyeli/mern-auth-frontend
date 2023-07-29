import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute() {
  // const [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios
  //       .get("/profile", {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Tokeni gönder header ile
  //         },
  //       })
  //       .then((res) => {
  //         setUserData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     //Token yoksa veya geçersize logine git
  //     <Navigate to={"/login"} />;
  //   }
  // }, []);

  // if (!userData) {
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <>
      <Outlet />
    </>
  );
}
