import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
const Dropdown = ({ submenu, dropdown }) => {
  // const [name, id, to, fontAwesome ]=submenu
  //   const [submenus, setSubmenus] = useState([]);
  //   useEffect(() => {
  //     // setSubmenus([...submenu]);
  //     setSubmenus((prev) => [...prev, submenu]);
  //   }, []);
  // console.log(submenu[0].to);
  return (
    <>
      <ul
        className={`list-unstyled dropdown ${
          dropdown ? "show" : "dropdownNone"
        }`}
      >
        {submenu.map((sub, index) => {
          return (
            <Link to={sub.to} key={index}>
              <li>{sub.name}</li>
            </Link>
          );
        })}
      </ul>
      {/* {submenu} */}
    </>
  );
};

export default Dropdown;
