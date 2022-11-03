import React, { useState } from "react";
import {Submenu} from "./Navitem";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {Submenu.map((item) => {
          return (
            <li key={item.id}>
           
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.display}
            
              </Link>
             
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
