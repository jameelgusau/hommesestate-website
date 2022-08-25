import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link , animateScroll } from "react-scroll";
import { BiMenu, BiX } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import Logo from "../../app/assets/icons/hommeslogo.svg";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };
  const close = () => setClick(false);

//   const goTop = ()=>{
//     animateScroll.scrollToTop()
//   }
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => close()} />
      <nav className="navbar activebg" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to='/' className="nav-logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <ul  className="nav-items">
                <li className="nav-item">
                  <Link
                //   to="solutions" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                    to="/"
                    // className="nav-links child1"
                    className="nav-links nav-links--black"
                    onClick={click ? handleClick : null}
                  >
                    <span>Company</span>
                    {/* <BiChevronDown color="#cccccc" size="14px" /> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                //   to="company" smooth={true} duration={500} spy={true} exact="true" offset={-50}
                    exact
                    to="/about"
                    // activeClassName="active"
                    // className="nav-links"
                    className="nav-links nav-links--black"
                    onClick={click ? handleClick : null}
                  >
                    <span>Services</span>
                    {/* <BiChevronDown color="#cccccc" size="14px" /> */}
                  </Link>
                </li>
              </ul>
            </li>
            <li >
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
                    to="/"
                    // to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-50}
                    // activeClassName="active"
                    // className="nav-links phn"
                    className="nav-links nav-links--black bdr"
                    onClick={click ? handleClick : null}
                  >
                    <BsTelephone /><span style={{paddingLeft: 10}}> Contact Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    // exact
                    href="https://wonderful-platypus-c1e268.netlify.app/login"
                    // activeClassName="active"
                    // className="nav-links btn"
                    className="nav-links nav-links--black bdr"
                    onClick={click ? handleClick : null}
                    target="_blank" rel="noreferrer"
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
