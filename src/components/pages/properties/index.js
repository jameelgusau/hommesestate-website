import React from "react";
// import card1 from "../../../app/assets/image/SIG.jpg";

import PropertyCarousel from "../../carousels/PropertyCarousel";

const Properties = () => {
  return (
    <div>
      <div className="properties">
        <div className="properties__header">
          <h3 className="properties__header--title">
            The Fusion Plaza
          </h3>
        </div>
        <div className="properties__img">
          {/* <div className="slideshow-container"> */}
            {/* <!-- Full-width images with number and caption text --> */}
            {/* <div className="mySlides fade">
              <div classN="numbertext">1 / 3</div>
              <img src={card1} width="100%" alt="im1" />
              <div class="text">Caption Text</div>
            </div> */}


            {/* <!-- Next and previous buttons --> */}
            {/* <button class="prev" onclick="plusSlides(-1)">
              &#10094;
            </button>
            <button class="next" onclick="plusSlides(1)">
              &#10095;
            </button>
          </div> */}
          <PropertyCarousel />
        </div>
        <div className="properties__aside">
          <div className="properties-description">
            <h4 className="properties-description--title">Description</h4>
            <p className="properties-description--detail">
            Fusion plaza is a 90-unit plaza the firm developed and sold on off-plan basis per unit. The plaza is designed to be a flexible simple modern office/business suite adequately equipped with standard amenities to meet with the accommodation needs of any class of business. The sizes are very flexible irrespective of the already existing dimensions on plan. The plaza offers steady electricity, neat ambience, a functional elevator, good spaces, excellent reticulation etc., with an all-round visibility for businesses and offices situated in it.
            </p>
            <h4 className="properties-description--title">Location</h4>
            <p className="properties-description--detail">Wuye district, Abuja</p>
            <h4 className="properties-description--title">Property type</h4>
            <p className="properties-description--detail">Commercial (Shops & office Suite)</p>
            <h4 className="properties-description--title">Total Units</h4>
            <p className="properties-description--detail">90</p>
            <h4 className="properties-description--title">Units Available</h4>
            <p className="properties-description--detail">10</p>
          </div>
          <div className="properties-btn">
            <a
              href="https://wonderful-platypus-c1e268.netlify.app/login"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Reserve Space Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
