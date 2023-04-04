import React from "react";
import Navbar from "../../components/organism/navbar/Navbar";
import SideNavbar from "../../components/organism/side navbar/SideNavbar";

import './home.css'

const Home = () => {
  return (
    <>
      <div>
        <div className="home__navbar">
          <Navbar />
        </div>
        <div>
          <div>
            <SideNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
