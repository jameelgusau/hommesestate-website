import React from "react";
import { useState } from "react";
// import Carousel from "nuka-carousel";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import card1 from "../../app/assets/image/SIG.jpg";
import card2 from "../../app/assets/image/SIG-23.jpg";
import card3 from "../../app/assets/image/SIG-22.jpg";

var imageData = [
    {0: card1, alt: "building"},
    {1: card2 , alt: "building"},
    {2: card3, alt:  "building"}
  ];

  const Carousel = (props) => {
    const showImage = () => {
        return (
            <img 
              src= { imageData[props.imageShow][props.imageShow] }
              alt = { imageData[props.imageShow].alt }
              title = { imageData[props.imageShow].alt }
            //   style = {{ width: "100%", borderRadius: "100px" }}
              />
          );
    }
  return (
    <div className="pcarousel">
        { showImage() }
      </div>
  );
}

const CarouselControl =(props)=> {
    return(
        <div className="carousel-btn">
          <button className="carousel-btn--button" onClick={props.prev}><MdOutlineKeyboardArrowLeft /></button>
          <button className="carousel-btn--button" onClick={props.next}><MdOutlineKeyboardArrowRight /></button>
        </div>
      );
}

const PropertyCarousel = (props) => {
    const [ imageShow, setImageShow] = useState(0)

    const prev =() =>{
        if (imageShow === 0){
          setImageShow(imageData.length - 1 );
        } else {
          setImageShow(imageShow - 1);
        }
      }
    const next =() =>{
        if (imageShow === imageData.length - 1) {
          setImageShow(0);
        } else {
          setImageShow(imageShow + 1);
        }
      }
      return(
        <div className="container">
            <div style={{ borderRadius: "100px" }}>
            <Carousel
            imageShow = { imageShow }
            />
            </div>
  
          <CarouselControl
            prev = { prev }
            next = { next }
            />
        </div>
      );

};




export default PropertyCarousel;







// <Carousel 
// renderBottomLeftControls={({ previousSlide }) => (
//     <button onClick={previousSlide}>Previous</button>
//   )}
//   renderBottomRightControls={({ nextSlide }) => (
//     <button onClick={nextSlide}>Next</button>
//   )}
// renderBottomLeftControls={({ previousSlide }) => (
//     <button style={{background: 'blue',bottom: 0, position: 'absolute',zIndex:1000}} onClick={previousSlide}>
//       <i className="fa fa-arrow-left" />
//     </button>
//   )}
//   renderBottomRightControls={({ nextSlide }) => (
//     <button onClick={nextSlide}>
//       <i className="fa fa-arrow-right"/>
//     </button>
//   )}

// >
//   <img src={card2} width="100%" alt="im1" />
//   <img src={card2} width="100%" alt="im1" />
//   <img src={card2} width="100%" alt="im1" />
//   <img src={card2} width="100%" alt="im1" />
// </Carousel>