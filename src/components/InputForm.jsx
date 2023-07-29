import React from "react";

export default function InputForm({
  placeholder,
  type,
  setValueHandler,
  valuesToHandle,
  callback,
}) {
  if (callback) {
    callback();
  }
  return (
    <input
      className="ps-5 py-5 w-full bg-white border border-gray-400 drop-shadow-lg outline-none focus:placeholder:bg-slate-50 focus:placeholder:absolute focus:placeholder:-translate-y-5 focus:placeholder:transition-all focus:placeholder:ease-in-out "
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        if (setValueHandler && valuesToHandle) {
          if (e.target.type === "text") {
            console.log("username");
            setValueHandler({
              ...valuesToHandle,
              username: e.target.value,
            });
          } else if (e.target.type === "email") {
            console.log("email");
            setValueHandler({ ...valuesToHandle, email: e.target.value });
          } else if (e.target.type === "password") {
            console.log("password");
            setValueHandler({
              ...valuesToHandle,
              password: e.target.value,
            });
          }
        }
      }}
    />
  );
}
