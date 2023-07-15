import React, { useState } from "react";
import Navbar from "../../components/organism/navbar/Navbar";
import SideNavbar from "../../components/organism/side navbar/SideNavbar";

import './home.css'

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div>
        <div className="home__navbar">
          <Navbar onClickNavbar={() => setNavbar(!navbar)} />
        </div>
        <div>
          <div>
            <SideNavbar onClickSideNavbar={() => setNavbar(!navbar)} navbar={navbar}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
