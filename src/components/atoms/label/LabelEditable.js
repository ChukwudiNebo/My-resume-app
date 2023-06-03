import React from "react";
import "./labeledit.css";

const LabelEditable = ({
  inputType,
  inputName,
  inputValue,
  inputPlaceholder,
  onChange,
}) => {
//   console.log({
//     "inputValue >>>>": inputValue,
//     "inputName >>>>>>": inputName,
//     "onChange >>>>>": onChange,
//   });
  return (
    <>
      <div className="labelEditable">
        <input
          type={inputType}
          name={inputName}
        //   id="input"
          value={inputValue}
          placeholder={inputPlaceholder}
          // width: "600px", height: "60px",
          onChange={onChange}
          style={{ border: "0px",margin:"0px" }}
        />
      </div>
    </>
  );
};

export default LabelEditable;
