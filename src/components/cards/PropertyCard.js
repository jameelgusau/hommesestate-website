import React from "react";
import card1 from "../../app/assets/image/SIG.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

// /property/1

const PropertyCard = () => {
  return (
    <Link to="/property/1" className="pcard">
      <img src={card1} alt="Denim Jeans" className="pcard__image" />
      <div className="pcard__body">
        <h3 className="pcard__body--title">The Fusion Plaza, Block B</h3>
        <div className="pcard__body--con">
          <p>
            <HiOutlineLocationMarker color="#C1C1C1" /> <span style={{textDecoration: "underline"}}>Wuse, Zone 3</span>
          </p>
          <p>
            127 <span>Units</span>
          </p>
        </div>

        <button className="pcard__btn">Check Available Units &#8594;</button>
      </div>
    </Link>
  );
};

export default PropertyCard;
