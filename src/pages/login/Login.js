import React from "react";
import { Link } from "react-router-dom";
import Text from "../../components/atoms/text/Text";
import Label from "../../components/atoms/label/Label";
import BgImg from "../../components/atoms/backgroundImage/BgImg";
import Input from "../../components/atoms/input/Input";
import Button from "../../components/atoms/button/Button";

import './login.css'

const Login = () => {
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
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="my-3">
            <Button buttonText="Log In" width="100" />
          </div>
        </div>

        <div className="login__divThree">
          <div className="d-flex flex-nowrap">
            New to Resume? 
            <Link className="mx-1">
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
