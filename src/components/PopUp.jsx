import React from "react";

const PopUp = ({ text, bgColor, textColor, isTrue }) => {
  return (
    <div
      className={`absolute top-4 left-1/2 -translate-x-1/2 transform rounded-xl p-5 text-sm transition-all duration-300 ease-in-out ${
        isTrue ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      } ${bgColor} ${textColor}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default PopUp;
