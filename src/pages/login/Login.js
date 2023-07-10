import React, { useState } from "react";
import { Link } from "react-router-dom";
import Text from "../../components/atoms/text/Text";
import Label from "../../components/atoms/label/Label";
import BgImg from "../../components/atoms/backgroundImage/BgImg";
import Input from "../../components/atoms/input/Input";
import Button from "../../components/atoms/button/Button";
import ButtonSpinner from "../../components/atoms/button/ButtonSpinner";

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
  const [buttonText, setButtonText] = useState(
    <Button buttonText="login" width="100" />
  );

  const [loading, setLoading] = useState(false);

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
  };

  const submitLogin = () => {
    setLoading(true);
    setButtonText(<ButtonSpinner width={100} />);
    // if (!email && !password) {
    //   toast.error("Invalid Credentials");
    //   setButtonText(buttonText);
    // }
    //  else {
    //   setButtonText(<ButtonSpinner width={100} />);
    // }
    setTimeout(() => {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          //Existing and future Auth states are now persisted in the current session only.closing the window would clear any existing state even if the user forgets to sign out.
          // New sign-in will be persisted with session persistence
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              if (user) {
                setLoading(true);
                toast.success("Log in successful");
                navigate("/");
              } else {
                setLoading(false);
                setButtonText(buttonText);
              }
            })
            .catch((error) => {
              const errorCode = error.code;
              toast.error(errorCode);
              setButtonText(buttonText);
              setLoading(false);
              console.log("2");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          setLoading(false);
          toast.error(errorCode);
          setButtonText(buttonText);
        });
      setLoading(false);
      setButtonText(<Button buttonText="login" width="100" />);
    }, 1000);

    // when i signIn and refresh the page, it takes me back to the login page as i hit private routes
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
          <div className="my-3">
            {loading ? (
              <div>{buttonText}</div>
            ) : (
              <div onClick={() => submitLogin()}>{buttonText}</div>
            )}
          </div>
          {/* <div className="my-3" onClick={() => submitLogin()}>
            {loading ? (
              <Button buttonText="Loading" width="100" />
            ) : (
              <Button buttonText="Log In" width="100" />
            )}
          </div> */}
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
