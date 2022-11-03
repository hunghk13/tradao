import React, { useRef, useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/IMG/logotra.jpg";

import { Icons, nav_link, Icons_1 } from "./Navitem";
import Dropdown from "./Dropdown";
// import { AiOutlineMenu } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const showMenuRef = useRef();
  const ToggleMenu = () => {
    showMenuRef.current.classList.toggle("show__menu");
  };

  return (
    <header className="header clear">
      <div className="top-intro-header">
        <div className="container">
          <div className="row">
            <div className="logo col-sm-3">
              <Link to="/" className="clearfix">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-sm-9 ">
              <div className="icon-mobile">
                <ul>
                  {Icons_1.map((item) => (
                    <li>
                      <NavLink to={item.path} className={item.class}>
                        {item.icon}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <nav className="top-intro-menu">
                <ul>
                  {Icons.map((item) => (
                    <li>
                      <NavLink to={item.path} className={item.class}>
                        {item.icon}
                      </NavLink>
                    </li>
                  ))}
                  <li className="intro-menu-search">
                    <form
                      action="/search"
                      method="get"
                      className="navbar-search"
                    >
                      <input
                        type="text"
                        id="search"
                        placeholder="Tìm Kiếm"
                      ></input>
                    </form>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="top-main-menu">
          <div className="container">
            <nav className="standard-menu boder">
              <ul
                className="menu-ul clearfix"
              >
                {nav_link.map((item, index) => {
                  if (item.display === "Sản phẩm") {
                    return (
                      <li
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                      >
                        <NavLink
                          to={item.path}
                          key={index}
                          className={(navClass) =>
                            navClass.isActive ? "active__menu" : ""
                          }
                        >
                          {item.display} {item.icon}
                        </NavLink>
                        {dropdown && <Dropdown />}
                      </li>
                    );
                  }
                  return (
                    <li>
                      <NavLink
                        to={item.path}
                        key={index}
                        className={(navClass) =>
                          navClass.isActive ? "active__menu" : ""
                        }
                      >
                        {item.display} {item.icon}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <span className="menu-bar " onClick={ToggleMenu}>
              <FaBars className="icon-bar " />
            </span>
            <div className="search-mobile  ">
              <form action="/search" method="get" className="nav-search">
                <input
                  type="text"
                  placeholder="Tìm Kiếm"
                  className="qwer"
                  id="search-mobi"
                ></input>
              </form>
            </div>
            <nav className="menu-mobile"  ref={showMenuRef} onClick={ToggleMenu}>
                 {nav_link.map((item, index) => {
                  
                  return (
                    <li>
                      <NavLink
                        to={item.path}
                        key={index}
                        className={(navClass) =>
                          navClass.isActive ? "active__menu" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}

            </nav>
           
            
         
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
