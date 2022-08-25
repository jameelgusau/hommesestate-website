import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import { BiMenu, BiX } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

import Logo from "../../app/assets/icons/hommeslogo.svg";
import Logo2 from "../../app/assets/icons/whitelogo.svg";

const Header = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const close = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const goTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => close()} />
      <nav
        className={navbar ? "navbar activebg" : "navbar"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <a  href="!#" onClick={goTop} className="nav-logo">
            {navbar ? (
              <img src={Logo} alt="Logo" />
            ) : (
              <img src={Logo2} alt="Logo" />
            )}
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <ul className="nav-items">
                <li className="nav-item">
                  <Link
                    to="company"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-70}
                    // to="/"
                    // className="nav-links child1"
                    className={
                      navbar
                        ? "nav-links nav-links--black"
                        : "nav-links  child1"
                    }
                    onClick={click ? handleClick : null}
                  >
                    <span>Company</span>
                    {/* <BiChevronDown color="#cccccc" size="14px" /> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="solutions"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-50}
                    // exact
                    // to="/about"
                    // activeClassName="active"
                    // className="nav-links"
                    className={
                      navbar ? "nav-links nav-links--black" : "nav-links"
                    }
                    onClick={click ? handleClick : null}
                  >
                    <span>Services</span>
                    {/* <BiChevronDown color="#cccccc" size="14px" /> */}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className="nav-items">
                {/* <li className="nav-item">
                  <NavLink
                    // exact
                    to="/blog"
                    // activeClassName="active"
                    // className="nav-links"
                    className={navbar ? "nav-links nav-links--black" : "nav-links"}
                    onClick={click ? handleClick : null}
                  >
                    <BiSearch/>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <Link
                    // exact
                    // to="/blog"
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-50}
                    // activeClassName="active"
                    // className="nav-links phn"
                    className={
                      navbar ? "nav-links nav-links--black bdr phn" : "nav-links phn btn"
                    }
                    onClick={click ? handleClick : null}
                  >
                    <BsTelephone />
                    <span style={{ paddingLeft: 10 }}> Contact Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    // exact
                    href="https://wonderful-platypus-c1e268.netlify.app/login"
                    target="_blank" rel="noreferrer"
                    // activeClassName="active"
                    // className="nav-links btn"
                    className={
                      navbar ? "nav-links nav-links--black bdr" : "nav-links btn"
                    }
                    onClick={click ? handleClick : null}
                   
                  >
                    login
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
