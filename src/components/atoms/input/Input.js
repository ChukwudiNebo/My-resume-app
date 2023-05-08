import React, { useState } from "react";
import "./input.css";
const Input = ({ inputType, inputName, inputValue, inputPlaceholder,onChange }) => {
  // const [inputFields, setInputFields] = useState({
  //   inputName,
  //   inputValue
  // })
  // const onChange = (e) => {
  //   setInputFields({
  //     ...inputFields,
  //     [e.target.name]: e.target.value,
  //   });
    // console.log(inputValue, inputName);
  // };
  return (
    <>
      <div>
        <input
          type={inputType}
          name={inputName}
          id="input"
          value={inputValue}
          placeholder={inputPlaceholder}
          // width: "600px", height: "60px",
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
