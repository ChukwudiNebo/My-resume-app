import React, { useState } from "react";
import { Link } from "react-router-dom";
import Text from "../../components/atoms/text/Text";
import Label from "../../components/atoms/label/Label";
import BgImg from "../../components/atoms/backgroundImage/BgImg";
import Input from "../../components/atoms/input/Input";
import Button from "../../components/atoms/button/Button";

import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  // Navigate
  const navigate = useNavigate();

  const auth = getAuth();
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const { email, password } = logIn;

  const onInputChange = (e) => {
    setLogIn({
      ...logIn,
      [e.target.name]: e.target.value,
    });
    console.log(logIn);
  };

  const submitLogin = () => {
    if (!email && !password) {
      toast.error("Invalid Credentials");
    }

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        //Existing and future Auth states are now persisted in the current session only.closing the window would clear any existing state even if the user forgets to sign out.
        // New sign-in will be persisted with session persistence
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
              toast.success("Log in successful");
              navigate("/");
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(errorCode);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });

    // when i signIn and refresh the page, it takes me back to the login page as i hit private routes
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     if (user) {
    //       toast.success("Log in successful");
    //       navigate("/");
    //     }
    //     // console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     toast.error(errorCode);
    //     // console.log(errorCode);
    //     // const errorMessage = error.message;
    //     // console.log(errorMessage);
    //   });
  };

  return (
    <>
      <div className="login">
        <div>
          <div>
            <BgImg />
          </div>
          <div className="text-center">
            <Text text="Log in to Resume" />
          </div>
        </div>
        <div className="login__divTwo">
          <div>
            <form>
              <div className="my-2">
                <div className="login__label">
                  <Label label="Email address" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="email"
                    inputName="email"
                    inputPlaceholder="Email address"
                    inputValue={logIn.firstName}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="my-2">
                <div className="login__label">
                  <Label label="Password" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="password"
                    inputName="password"
                    inputPlaceholder="Password"
                    inputValue={logIn.firstName}
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="my-3" onClick={() => submitLogin()}>
            <Button buttonText="Log In" width="100" />
          </div>
        </div>

        <div className="login__divThree">
          <div className="d-flex flex-nowrap">
            New to Resume?
            <Link to="/sign-up" className="mx-1">
              <Text text="Create an account" />
            </Link>
          </div>
        </div>
        <div className="login__links my-3 d-flex justify-content-evenly align-items-center">
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

export default Login;
