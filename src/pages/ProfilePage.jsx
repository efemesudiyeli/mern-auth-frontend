import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`, // Tokeni gönder header ile
            },
          })
          .then((res) => {
            setUserData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("Navigated no token");
        //Token yoksa veya geçersize logine git
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl ">Hoşgeldin {userData.username}</h1>
      <strong>Email</strong> <span>{userData.email}</span>
      <strong>Üyelik Tarihi</strong> <span>{userData.createdAt}</span>
    </div>
  );
}
