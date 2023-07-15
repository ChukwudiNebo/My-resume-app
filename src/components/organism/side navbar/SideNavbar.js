import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "../../atoms/hamburger/Hamburger";
import SideNavbarTrays from "./sideNavbarTray/SideNavbarTrays";

import "./sidenavbar.css";

const SideNavbar =React.memo( ({ onClickSideNavbar,navbar }) => {
  // const [navbar, setNavbar] = useState(true);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex SideNavbar">
          <div
            className={`${
              !navbar ? "SideNavbar__hamburger" : "SideNavbar__hamburger-none"
            }  order-2 d-none d-lg-block`}
            onClick={() => onClickSideNavbar(false)}
          >
            <Hamburger />
          </div>
          {/* <div className="SideNavbar__navbar"> */}
          <div className="order-1">
            {!navbar && (
              <div
                className="SideNavbar__sideNavbarTray"
                style={{ paddingBottom: "300px" }}
              >
                <div>
                  <SideNavbarTrays />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* </div> */}
        <div className={!navbar ? "outlet" : "outletFull"}>
          <Outlet />
        </div>
      </div>
    </>
  );
});

export default SideNavbar;

// import React, { Fragment,useMatch } from 'react'
// import { Link } from "react-router-dom";

// const SideNavbar = () => {
// function CustomLink({ children, to, ...props }) {
//   // let match = useMatch(to !== "" ? `` + to : "");

//   // console.log(children)
//   return (
//     // <Link to={`faqs/${to}/`} className={`${match ? "text-primary" : ""} fix`}>
//     <Link to={to} {...props} className={`${match ? "activeProduct" : ""} fix`}>
//       {children}
//     </Link>
//   );
// }

// const CustomLinkName = [
//   {
//     name: "Templates",
//     id: "templates",
//     to: "templates",
//   },
//   {
//     name: "My favorite",
//     id: "favorite",
//     to: "favorite",
//   },
//   {
//     name: "Cards",
//     id: "cards",
//     to: "cards",
//   },
//   {
//     name: "",
//     id: "calenders",
//     to: "calenders",
//   },
//   {
//     name: "Campaign Materials",
//     id: "campaign-materials",
//     to: "campaign-materials",
//   },
//   {
//     name: "Caps & Hats",
//     id: "caps-hats",
//     to: "caps-hats",
//   },
//   {
//     name: "ClothesTag",
//     id: "clothestag",
//     to: "clothestag",
//   },
//   {
//     name: "Corporate Gifts",
//     id: "corporate-gifts",
//     to: "corporate-gifts",
//   },
//   {
//     name: "Courier Bags",
//     id: "courier-bags",
//     to: "courier-bags",
//   },
//   {
//     name: "Envelopes",
//     id: "envelopes",
//     to: "envelopes",
//   },
//   {
//     name: "Posters",
//     id: "posters",
//     to: "posters",
//   },
//   {
//     name: "Stickers",
//     id: "stickers",
//     to: "stickers",
//   },
// ];

// return (
// <Fragment>
//   <div className="d-none d-md-block productList">
//     {CustomLinkName.map(({ name, to, id }) => (
//       <CustomLink to={to} key={id}>
//         <div className="d-flex align-items-baseline">
//           <div>{name}</div>
//           <div className="product-right-angle">
//             <i class="fa-solid fa-angle-right"></i>
//           </div>
//           {/* <div>
//                             {children}
//                         </div> */}
//         </div>
//       </CustomLink>
//     ))}
//   </div>
// </Fragment>
// );
// }

// export default SideNavbar
