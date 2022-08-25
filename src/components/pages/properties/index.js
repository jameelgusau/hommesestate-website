import React from "react";
// import card1 from "../../../app/assets/image/SIG.jpg";

import PropertyCarousel from "../../carousels/PropertyCarousel";

const Properties = () => {
  return (
    <div>
      <div className="properties">
        <div className="properties__header">
          <h3 className="properties__header--title">
            The Fusion Plaza, Block B
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. labore. et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud. exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4 className="properties-description--title">Location</h4>
            <p className="properties-description--detail">Wuse, Zone 3</p>
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
