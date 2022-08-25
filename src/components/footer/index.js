import React from "react";
import { NavLink } from "react-router-dom";
import { RiTwitterFill, RiFacebookFill, RiInstagramLine } from 'react-icons/ri'
import { BiEnvelope } from 'react-icons/bi';
import { BsTelephone } from "react-icons/bs";
import {IoLocationOutline} from 'react-icons/io5'
import Logo from "../../app/assets/icons/hommeslogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-section__logo">
          <img src={Logo} alt="logo" className="footer-section__logo--img" />
        </div>
        <div className="footer-section__agents">
          <h1 className="footer-section__agents--title">Agents</h1>
          <p className="footer-section__agents--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
        <div className="footer-section__contacts" id="contact">
          <h1 className="footer-section__contacts--title">Contact</h1>
          <div className="footer-section__contacts--description">
            <ul className="contact-list">
              <li ><IoLocationOutline size={35} /> <p>Suite 418, The Fusion Wuye, 
Plot 312, Olusegun Obasanjo way, Wuye district, Abuja.</p>
</li>
<li><BsTelephone /><p>+234 704 882 1200</p></li>
<li> <BiEnvelope /> <p>hommesestate@gmail.com</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-section1">
        <h3 className="footer-section1--title">© 2022, Hommes Estates & Facilities</h3>
        <div className="footer-section1__terms">
          <NavLink to='' className="footer-section1__terms--link">Terms</NavLink>
          <NavLink to='' className="footer-section1__terms--link">Privacy</NavLink>
          <NavLink to='' className="footer-section1__terms--link">Cookies</NavLink>
        </div>
        <div className="footer-section1__social">
        <NavLink to='' className="footer-section1__social--link"><RiTwitterFill /></NavLink>
          <NavLink to='' className="footer-section1__social--link"><RiFacebookFill /></NavLink>
          <NavLink to='' className="footer-section1__social--link"><RiInstagramLine /></NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
