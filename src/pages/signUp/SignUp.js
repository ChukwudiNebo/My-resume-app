import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import BgImg from "../../components/atoms/backgroundImage/BgImg";
import Button from "../../components/atoms/button/Button";
import Text from "../../components/atoms/text/Text";
import Label from "../../components/atoms/label/Label";
import Input from "../../components/atoms/input/Input";

// firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// react toastify
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  //  const history = useHistory();
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = signUp;

  const onInputChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
    console.log(signUp);
  };

  // firebase authentication
  const auth = getAuth();

  const handleSubmit = () => {
    // e.preventDefault();

    if (password !== password2) {
      toast.error("Invalid Credentials");
      // console.log("incorrect password");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if(user){
            toast.success("Sign Up successful");
            navigate("/");
          }
          // console.log(user);
          // history.push("/templates"); // navigate to private route
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            const errorCode = error.code;
            const splitError = errorCode.split("");
            const sliceError = splitError.slice(13, 27);
            const joinSliceError = sliceError.join("");
            // console.log(joinSliceError);
            toast.error(joinSliceError);
            // const errorMessage = error.message;
            // console.log(errorMessage);
          } else {
            toast.error("Invalid Credentials");
          }
        });
    }
  };

  return (
    <>
      <div>
        <div>
          <div>
            <BgImg />
          </div>
          <div className="text-center">
            <Text text="Sign up to Resume" />
          </div>
        </div>
        <div className="signUp__divTwo">
          <div>
            <form className="d-lg-flex flex-lg-wrap justify-content-lg-between">
              <div className="my-2 signUp__input-div">
                <div className="signUp__label">
                  <Label label="First Name" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="text"
                    inputName="firstName"
                    inputPlaceholder="First Name"
                    inputValue={signUp.firstName}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="my-2 signUp__input-div">
                <div className="signUp__label">
                  <Label label="Last Name" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="text"
                    inputName="lastName"
                    inputPlaceholder="Last Name"
                    inputValue={signUp.lastName}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              {/* <div>
                <Label label="Last Name" />
              </div>
              <div>
                <Input
                  inputType="text"
                  inputName="lastName"
                  inputPlaceholder="Last Name"
                />
              </div> */}
              <div className="my-2 signUp__input-div">
                <div className="signUp__label">
                  <Label label="Email address" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="email"
                    inputName="email"
                    inputPlaceholder="Email address"
                    inputValue={signUp.email}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="my-2 signUp__input-div">
                <div className="signUp__label">
                  <Label label="Password" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="password"
                    inputName="password"
                    inputPlaceholder="Password"
                    inputValue={signUp.password}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="my-2 signUp__input-div">
                <div className="signUp__label">
                  <Label label="Password" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="password"
                    inputName="password2"
                    inputPlaceholder="Password"
                    inputValue={signUp.password2}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              {/* add radio button here  */}
            </form>
          </div>
          <div onClick={() => handleSubmit()}>
            <Button buttonText="Sign Up" width="100" />
          </div>
        </div>

        <div className="signUp__divThree">
          <div className="d-flex text-center">
            Already have an account?
            <Link to="/log-in" className="mx-1">
              <Text text="Sign in" />
            </Link>
          </div>
        </div>
        <div className="signUp__links my-3 d-flex justify-content-evenly align-items-center">
          <div>
            <Link to="">
              <Text text="Terms" />
            </Link>
          </div>
          <div>
            <Link to="">
              <Text text="Privacy" />
            </Link>
          </div>
          <div>
            <Link to="">
              <Text text="Security" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
