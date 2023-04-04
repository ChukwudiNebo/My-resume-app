import React from 'react'
import "./hamburger.css";

const Hamburger = ({navbar}) => {
  return (
    <>
      <div
        className="hamburger"
        // onClick={() => setNavbar(!navbarOpen)}
      >
        <div className={navbar ? "bar" : "bar "}></div>
        <div className={navbar ? "bar" : "bar "}></div>
        <div className={navbar ? "bar" : "bar"}></div>
      </div>
    </>
  );
}

export default Hamburger
