import React from "react";
import { Link } from "react-router-dom";
import ImgNfontAwesome from "../../atoms/imgNfontawesome/ImgNfontAwesome";
import Text from "../../atoms/text/Text";
import logo from "../../../images/logo.jpg";
import Hamburger from "../../atoms/hamburger/Hamburger";

import "./navbar.css";

import { toast } from "react-toastify";

import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();
  const signOutButton = () => {
    signOut(auth).then(() => {
      toast.success("Log out successful");
    }).catch((error)=>{
            toast.danger(error);
            // toast.danger("Log out error");

    })
  };

  return (
    <>
      <div className="navbar">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* hamburger */}
          <div className="d-block d-md-none">
            {/* add some state to it  */}
            <Hamburger />
          </div>
          {/* <div className=''> */}
          <div className="navbar__logo">
            {/* logo  */}
            <ImgNfontAwesome img={logo} height="50" width="150" />
          </div>
          <div className="d-flex align-items-center ml-auto">
            <div className="mx-2 navbar__template">
              <Text text="Buy Template" />
            </div>
            {/* profile image  */}
            <div className="mx-3">
              <ImgNfontAwesome fontAwesome="fa-solid fa-user" />
            </div>
            {/* search entire website */}
            <div className="mx-3">
              <ImgNfontAwesome fontAwesome="fa-solid fa-magnifying-glass" />
            </div>
            <div className="d-flex navbar__info">
              {/* <div className="navbar__logIn mx-2">
              <Link to="/log-in">
                <Text text="Log in" />
              </Link>
            </div> */}
              <div className="navbar__signUp mx-3" onClick={signOutButton}>
                <Link to="/sign-up">
                  <Text text="Log Out" />
                </Link>
              </div>
              {/* <div></div> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
