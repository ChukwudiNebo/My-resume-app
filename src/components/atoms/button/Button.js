import React from "react";
import "./button.css";

const Button = ({ buttonText,width }) => {
  return (
    <>
      <button type="button" className="button" style={{width:`${width}%`}}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
