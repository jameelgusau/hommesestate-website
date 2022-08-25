import React from "react";
import person from "../../app/assets/image/person.jpg";
import Carousel from "nuka-carousel";
import { useWindowWidth } from "../../app/hooks/useWindowHook";

const CardCarousel = () => {
    const abc = useWindowWidth()
    console.log(abc)
  return (
    <div className="carousel">
      <Carousel 
      slidesToShow={ abc < 720 ? 1: 1.5}
      slidesToScroll={3}
    //   wrapAround={true}
    autoplay={true}
    // cellSpacing={cellSpacing}
    animation={true}
    // autoplay={autoplay}
    cellAlign={"center"}
    // heightMode={heightMode}
    // scrollMode="remainder"
    withoutControls={true}
    // slideIndex={slideIndex}
    slideListMargin={0}
    cellSpacing={40}
    // slidesToScroll={slidesToScroll}
    // slidesToShow={slidesToShow}
    // transitionMode={transitionMode}
    // withoutControls={withoutControls}
    wrapAround={true}
      >
        <div className="carousel__card-container">
          <div className="carousel__card-container__card">
            <img
              className="carousel__card-container__card--image"
              src={person}
              alt="person"
            />
            <div className="carousel__card-text">
              <h3 className="carousel__card-text--title">Joshua Garrison</h3>
              <p className="carousel__card-text--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p className="carousel__card-text--rank">COO, Evil Corp</p>
            </div>
          </div>
        </div>
        <div className="carousel__card-container">
          <div className="carousel__card-container__card">
            <img
              className="carousel__card-container__card--image"
              src={person}
              alt="person"
            />
            <div className="carousel__card-text">
              <h3 className="carousel__card-text--title">Joshua Garrison</h3>
              <p className="carousel__card-text--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p className="carousel__card-text--rank">COO, Evil Corp</p>
            </div>
          </div>
        </div>
        <div className="carousel__card-container">
          <div className="carousel__card-container__card">
            <img
              className="carousel__card-container__card--image"
              src={person}
              alt="person"
            />
            <div className="carousel__card-text">
              <h3 className="carousel__card-text--title">Joshua Garrison</h3>
              <p className="carousel__card-text--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p className="carousel__card-text--rank">COO, Evil Corp</p>
            </div>
          </div>
        </div>
        
        {/* <img
          alt="img"
          src="https://via.placeholder.com/450/ffff00/c0392b/&text=slide2"
        />
        <img
          alt="img"
          src="https://via.placeholder.com/450/ffffff/c0392b/&text=slide3"
        />
        <img
          alt="img"
          src="https://via.placeholder.com/450/ffffcc/c0392b/&text=slide4"
        />
        <img
          alt="img"
          src="https://via.placeholder.com/450/ff000/c0392b/&text=slide5"
        />
        <img
          alt="img"
          src="https://via.placeholder.com/450/cccccc/c0392b/&text=slide6"
        /> */}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
