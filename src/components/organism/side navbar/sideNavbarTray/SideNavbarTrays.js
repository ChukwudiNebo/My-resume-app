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
          to: "/resume/preview",
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
      id: "settings",
      to: "settings",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Proofreading",
      id: "Proofreading",
      to: "proofreading",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Cards",
      id: "cards1",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Cards",
      id: "cards2",
      to: "cards",
      fontAwesome: "fa-solid fa-book-open-cover",
      // submenu: [],
    },
    {
      name: "Cards",
      id: "cards3",
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
                  {submenu ? (
                    <div>
                      {/* <Link to={to}> */}
                      <button
                        className="d-flex flew-row flex-nowrap align-items-center sideNavbarTray__dashboard"
                        type="button"
                        onClick={() => setDropdown(!dropdown)}
                        to={to}
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

                      {/* <Link to={to}> */}
                        <div className="">
                          <Dropdown submenu={submenu} dropdown={dropdown} />
                        </div>
                      {/* </Link> */}
                    </div>
                  ) : (
                    <Link to={to}>
                      <button
                        className="d-flex flew-row flex-nowrap align-items-center sideNavbarTray__dashboard"
                        type="button"
                        to={to}
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
                    </Link>
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
