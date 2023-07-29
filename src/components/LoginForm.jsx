import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Title from "./Title";
import InputForm from "./InputForm";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();

  const buttonHandlerFunction = (e) => {
    e.preventDefault();
    axios
      .post("/login", userData)
      .then((res) => {
        if (res.data.message) {
          alert(res.data.message);
        }

        // Giriş başarılı tokeni localstorage a yerleştir.
        localStorage.setItem("token", res.data.token);

        navigate("/profile");
      })
      .catch((err) => {
        // Giriş başarısız
        alert(err.response.data.error);
      });
  };

  const [userData, setUserData] = useState({
    email: null,
    password: null,
  });

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center w-[28rem] h-[32rem] mx-2 p-6 rounded-xl drop-shadow-2xl">
      <Title titleText={"Login"} />
      <form className="flex flex-col w-full h-full justify-center items-center">
        <InputForm
          placeholder={"Email"}
          type={"email"}
          setValueHandler={setUserData}
          valuesToHandle={userData}
        />
        <br />
        <InputForm
          placeholder={"Password"}
          type={"password"}
          setValueHandler={setUserData}
          valuesToHandle={userData}
        />
        <div className="w-full my-2">
          <input className="" type="checkbox" name="" id="" /> Show Password
        </div>
        <br />
        <PrimaryButton
          buttonHandlerFunction={buttonHandlerFunction}
          buttonText={"SIGN IN"}
        />
        <br />
        <span className="w-full h-[1px] bg-slate-300"></span>
        <br />

        <div>
          Forgot <Link>Username</Link> or <Link>Password</Link>?
          <br />
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </div>
      </form>
    </div>
  );
}
