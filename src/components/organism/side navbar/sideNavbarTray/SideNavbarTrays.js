import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgNfontAwesome from "../../../atoms/imgNfontawesome/ImgNfontAwesome";
import Dropdown from "../../../molecules/dropdown/Dropdown";
import "./sidenavbartray.css";

const SideNavbarTrays = () => {
  const [dropdown, setDropdown] = useState(false);

  const CustomLinkName = [
    // {
    //       name:,
    //       id:,
    //       to:,
    //       fontAwesome: "fa-solid fa-book-open-cover",

    //     }
    {
      name: "Templates",
      id: "templates",
      to: "templates",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "My Resume",
      id: "favorite",
      to: "favorite",
      fontAwesome: "fa-solid fa-book-open-cover",
      submenu: [
        {
          name: "fill in",
          id: "fill-in",
          to: "fill-in",
          fontAwesome: "fa-solid fa-book-open-cover",
        },
        {
          name: "design",
          id: "design",
          to: "design",
          fontAwesome: "fa-solid fa-book-open-cover",
        },
        {
          name: "preview",
          id: "preview",
          to: "preview",
          fontAwesome: "fa-solid fa-book-open-cover",
        },
        {
          name: "examples",
          id: "examples",
          to: "examples",
          fontAwesome: "fa-solid fa-book-open-cover",
        },
        {
          name: "Download",
          id: "download",
          to: "download",
          fontAwesome: "fa-solid fa-book-open-cover",
        },
        {
          name: "share",
          id: "share",
          to: "share",
          fontAwesome: "fa-solid fa-book-open-cover",
        },
      ],
    },
    {
      name: "Cards",
      id: "cards",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Settings",
      id: "cards",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Proofreading",
      id: "cards",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Cards",
      id: "cards",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Cards",
      id: "cards",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Cards",
      id: "cards",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
  ];
  return (
    <>
      <div>
        <div>
          {CustomLinkName.map(({ name, id, to, fontAwesome, submenu }) => {
            return (
              <div key={id} className="sideNavbarTray">
                <div>
                  {/* <Link to={to}> */}
                  {submenu ? (
                    <div>
                      <button
                        className="d-flex flew-row flex-nowrap align-items-center sideNavbarTray__dashboard"
                        type="button"
                        onClick={() => setDropdown(!dropdown)}
                      >
                        <span className="sideNavbarTray__img-box">
                          <ImgNfontAwesome fontAwesome={fontAwesome} />
                          {/* <img
                      src={dashboardImg}
                      alt=""
                      className="img"
                      style={{ color: "white" }}
                    /> */}
                        </span>
                        <span className="align-self-center sideNavbarTray__dashboardText">
                          {name}
                        </span>
                        <div className="sideNavbarTray__dash-icon">
                          <ImgNfontAwesome fontAwesome="fa-solid fa-angle-down" />
                        </div>
                      </button>

                      <div className="">
                        <Dropdown submenu={submenu} dropdown={dropdown} />
                      </div>
                    </div>
                  ) : (
                    <button
                      className="d-flex flew-row flex-nowrap align-items-center sideNavbarTray__dashboard"
                      type="button"
                      
                    >
                      <span className="sideNavbarTray__img-box">
                        <ImgNfontAwesome fontAwesome={fontAwesome} />
                        {/* <img
                      src={dashboardImg}
                      alt=""
                      className="img"
                      style={{ color: "white" }}
                    /> */}
                      </span>
                      <span className="align-self-center sideNavbarTray__dashboardText">
                        {name}
                      </span>
                      <div className="sideNavbarTray__dash-icon">
                        <ImgNfontAwesome fontAwesome="fa-solid fa-angle-down" />
                      </div>
                    </button>
                  )}
                  {/* {console.log(submenu)} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNavbarTrays;
