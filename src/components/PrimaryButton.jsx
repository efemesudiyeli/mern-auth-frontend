import React from "react";

export default function PrimaryButton({ buttonText, buttonHandlerFunction }) {
  return (
    <button
      onClick={buttonHandlerFunction}
      className="py-5 px-10 rounded-xl bg-[#646cff] text-white hover:scale-105 hover:bg-opacity-95 transition-all ease-in"
    >
      {buttonText}
    </button>
  );
}
