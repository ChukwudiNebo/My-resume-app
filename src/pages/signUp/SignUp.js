import React from "react";
import { Link } from "react-router-dom";
import BgImg from "../../components/atoms/backgroundImage/BgImg";
import Button from "../../components/atoms/button/Button";
import Text from "../../components/atoms/text/Text";
import Label from "../../components/atoms/label/Label";
import Input from "../../components/atoms/input/Input";

import "./signup.css";

const SignUp = () => {
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
            <form>
              <div className="my-2">
                <div className="signUp__label">
                  <Label label="First Name" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="text"
                    inputName="firstName"
                    inputPlaceholder="First Name"
                  />
                </div>
              </div>
              <div className="my-2">
                <div className="signUp__label">
                  <Label label="Last Name" />
                </div>
                <div className="my-1">
                  <Input
                    inputType="text"
                    inputName="lastName"
                    inputPlaceholder="Last Name"
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
              <div className="my-2">
                <div className="signUp__label">
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
                <div className="signUp__label">
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
              <div className="my-2">
                <div className="signUp__label">
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

              {/* add radio button here  */}
            </form>
          </div>
          <div>
            <Button buttonText="Sign Up" width="100" />
          </div>
        </div>

        <div className="signUp__divThree">
          <div className="d-flex">
            Already have an account?
            <Link className="mx-1">
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
