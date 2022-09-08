import React from "react";
import { NavLink } from "react-router-dom";
import { NotFoundIcon } from "../../../app/assets/image/Icons";

function NotFound() {
  return (
    <div className="container">
      <NotFoundIcon  size="340px"/>
      <NavLink to="/" className="notfound">Home</NavLink>
    </div>
  );
}

export default NotFound;