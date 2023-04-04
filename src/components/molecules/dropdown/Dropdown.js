import React, { useEffect, useState } from "react";
import './dropdown.css'
const Dropdown = ({ submenu, dropdown }) => {
  // const [name, id, to, fontAwesome ]=submenu
  //   const [submenus, setSubmenus] = useState([]);
  //   useEffect(() => {
  //     // setSubmenus([...submenu]);
  //     setSubmenus((prev) => [...prev, submenu]);
  //   }, []);
//   console.log(submenu);
  return (
    <>
      <ul
        className={`list-unstyled dropdown ${
          dropdown ? "show" : "dropdownNone"
        }`}
      >
        {submenu.map((sub, index) => {
          return <li key={index}>{sub.name}</li>;
        })}
      </ul>
      {/* {submenu} */}
    </>
  );
};

export default Dropdown;
