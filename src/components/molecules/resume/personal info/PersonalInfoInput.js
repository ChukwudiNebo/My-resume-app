import React, { useState } from "react";
import Label from "../../../atoms/label/Label";

import Input from "../../../atoms/input/Input";
import LabelEditable from "../../../atoms/label/LabelEditable";

const PersonalInfoInput = ({
  inputField,
  onInputChange,
  changedInputField,
  editInputFunc,
}) => {
  // console.log({ "editInputFunc >>>>":editInputFunc });
  // const [inputField, setInputField] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  // });

  const { firstName, lastName, email, phoneNumber } = inputField;

  // const onChange = (e) => {
  //   setInputField({
  //     ...inputField,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(inputField);
  // };
  const [changeLabel, setChangeLabel] = useState(1);
  const editLable = () => {
    setChangeLabel();
  };

  return (
    <>
      {/* <div> */}
      {/* <form onSubmit={(e) => OnSubmit(e)> */}
      <div>
        <div className="d-flex flex-wrap">
          <div className="my-2 mx-2">
            <div className="signUp__label d-flex justify-content-between" onClick={editLable} style={{margin:"0px",cursor: "pointer"}}>
              {changeLabel === 1 ? (
                <Label label={changedInputField.label} />
              ) : (
                // label="First name"
                <LabelEditable
                  onChange={editInputFunc}
                  // inputPlaceholder="First Name"
                  inputType="text"
                  inputName="firstName"
                  inputValue={changedInputField.label}
                />
              )}
              <p className="mr-2">edit</p>
            </div>
            <div className="my-1">
              <Input
                inputType="text"
                inputName="firstName"
                // inputPlaceholder="First Name"
                inputValue={firstName}
                onChange={onInputChange}
                // inputValue={inputField.firstName}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="my-2">
            <div className="signUp__label">
              <Label label="Last name" />
            </div>
            <div className="my-1">
              <Input
                inputType="text"
                inputName="lastName"
                inputPlaceholder="Last Name"
                inputValue={lastName}
                onChange={onInputChange}
                // inputValue={inputField.lastName}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="my-2">
            <div className="signUp__label">
              <Label label="Phone number" />
            </div>
            <div className="my-1">
              <Input
                inputType="text"
                inputName="phoneNumber"
                inputPlaceholder="Phone number"
                inputValue={phoneNumber}
                onChange={onInputChange}
                // inputValue={inputField.phoneNumber}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="my-2">
            <div className="signUp__label">
              <Label label="Email address" />
            </div>
            <div className="my-1">
              <Input
                inputType="email"
                inputName="email"
                inputPlaceholder="Email address"
                inputValue={email}
                onChange={onInputChange}
                // inputValue={inputField.email}
                // onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* </form> */}
      {/* <button type="submit" onSubmit={(e) => OnSubmit(e)}>
        Save
      </button> */}
      {/* </div> */}
    </>
  );
};

export default PersonalInfoInput;

// import React from "react";
// import Label from "../../../atoms/label/Label";
// import Input from "../../../atoms/input/Input";

// const PersonalInfoInput = ({ inputField, onInputChange }) => {
//   const { firstName, lastName, email, phoneNumber } = inputField;

// <div>
//   <div className="d-flex flex-wrap">
//     <div className="my-2">
//       <div className="signUp__label">
//         <Label label="First name" />
//       </div>
//       <div className="my-1">
//         <Input
//           inputType="text"
//           inputName="firstName"
//           inputPlaceholder="First Name"
//           inputValue={firstName}
//           onChange={onInputChange}
//         />
//       </div>
//     </div>
//     <div className="my-2">
//       <div className="signUp__label">
//         <Label label="Last name" />
