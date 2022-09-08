import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../app/assets/videos/video.mp4";
import justlogo from "../../app/assets/icons/justlogo.svg";
import busy from "../../app/assets/image/busy.jpg";
import stetis from "../../app/assets/image/stetis-logo.png";
// import mtn from "../../app/assets/image/mtn-logo.png";
// import andela from "../../app/assets/image/andela-logo.png";
import group from "../../app/assets/image/group.jpg";
// import contrix from "../../app/assets/image/constrix-logo.png";
import PropertyCard from "../cards/PropertyCard";
// import AnimationNumbers from "../num-animation";
// import CardCarousel from "../carousels/CardCarousel";
import SearchComponent from "../search";

const Home = () => {
  return (
    <div className="home">
      <div className="bg">
        <div className="home__hero">
          <div className="home__hero__text">
            <div className="home__hero__text--title">
              <h1>
                Real Estate, Facilities Management{" "}
                {/* <span style={{ color: "#ffffff" }}>   */}&{/* </span>  */}{" "}
                Civil Works
              </h1>
            </div>
            <div className="home__hero__text--description">
              <p>
                Creating simple, beautiful and affordable real estate
                investments. Whether it be a home to live, a place to trade or a
                place to play, we provide value for money and above all a high
                quality of service.
              </p>
            </div>
          </div>
          <div className="home__hero--videos">
            {/* <video
              // width="600"
              // height="300"
              loop
              autoPlay
              muted
              preload="auto"
              className="home__hero--videos--rdr"
            >
              <source src={Logo} />
            </video> */}
            {/* <iframe
              src="https://www.youtube.com/embed/xHw_uEL20cc?autoplay=1"

              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              className="home__hero--videos--rdr"
            /> */}
            <iframe
              src="https://www.youtube.com/embed/IWM0BVKyG8Y?autoplay=1&mute=1&playlist=IWM0BVKyG8Y&loop=1&controls=0&modestbranding=1"
              name="youtube embed"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="home__hero--videos--rdr"
              title="fusion video"
              width="600"
              height="300"
            ></iframe>
          </div>
          <div className="home__hero--search">
            <SearchComponent />
          </div>
        </div>
      </div>
      <div className="home__cards">
        <div className="home__cards__header">
          <h3 className="home__cards__header--title">
            Find flexible workspaces designed around your needs.
          </h3>
          <div className="home__cards__header--buttons">
            {/* <button >Wuye</button>
            <button>Wuse</button>
            <button>Kagini</button>
            <button>Maitama</button> */}
            <div class="radio-container">
              <input
                label="All"
                type="radio"
                id="all"
                name="group"
                value="all"
                checked
              />
              <input
                label="Wuse"
                type="radio"
                id="wuse"
                name="group"
                value="wuse"
              />
              <input
                label="Jabi"
                type="radio"
                id="jabi"
                name="group"
                value="jabi"
              />
              <input
                label="Gwarinpa"
                type="radio"
                id="gwarinpa"
                name="group"
                value="gwarinpa"
              />
            </div>
          </div>
        </div>
        <div className="home__cards__content">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <div className="home__cards__linkcon">
          <a
            href="https://wonderful-platypus-c1e268.netlify.app/login"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {" "}
            Reserve Space Now
          </a>{" "}
        </div>
      </div>

      <div className="container_subtitles">
        <h1 className="container_subtitles__subtitle">
          Who we are & What we do
        </h1>
      </div>
      <div className="home__team">
        <div className="home__contact__description">
          <p className="home__contact__description--paragraph">
            Hommes Estates & Facilities Ltd is an Abuja based real estate
            development and facilities management Company established in January
            2011. The company currently has a clientele base of over 400 clients
            to whom it provides different property portfolio management related
            services for both within and outside Abuja. These services range
            from Property Development, Total Facilities Management to Property
            Investment Advisory services.
          </p>
          {/* <AnimationNumbers /> */}
          <p className="home__contact__description--paragraph">
            At Hommes Estates & Facilities our teams of highly competent real
            estate professionals bring the combined years of their experience to
            bear to deliver excellent commercial and residential real estate
            development and property portfolio investments management to our
            clients in both the public and the private sectors in a multitude of
            areas spanning across the entire built environment.
          </p>
        </div>
        <img src={group} alt="busy" className="home__contact__img" />
      </div>
      <ul className="home__list">
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Innovation </p>
        </li>
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Professionalism</p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Reliability </p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Resilience </p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Affordability </p>
        </li>
      </ul>
      <div className="container_subtitles" id="solutions">
        <h1 className="container_subtitles__subtitle">Our Services</h1>
      </div>
      <div className="home__contact" id="solutions">
        <img src={busy} alt="busy" className="home__contact__img" />
        <div className="home__contact__description">
          {/* <h3 className="home__contact__description--title">
            Empowering tomorrow’s world at work.
          </h3> */}
          <p className="home__contact__description--paragraph">
            At Hommes Estates & Facilities Ltd our immense understanding of the
            real estate and construction industry coupled with the impressive
            combined years of work experience of our formidable team of
            professionals allows us to offer a wide range of real estate and
            facilities management services like no other property development
            company in Nigeria. Our clients includes both public and private
            sector organisations who are discerning and who desire prompt
            service, value for money and above all a high quality of service
            which can only be produced by firms with a high level of
            professionalism and dedication to duty. Our core service offering
            includes
          </p>
          <button className="home__contact__description--btn">
            Talk to an expert &#8594;
          </button>
        </div>
      </div>
      <ul className="home__list">
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Real Estate Development. </p>
        </li>
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Total Facilities Management.</p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Real Estate Portfolio Management </p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Real Estate Feasibility and viability studies </p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Construction supervision and monitoring services </p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Estate agency consultancy services</p>
        </li>{" "}
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Development management </p>
        </li>
        <li className="home__list--item">
          <img src={justlogo} alt="busy" className="home__list--item--img" />
          <p>Building and infrastructure construction</p>
        </li>
      </ul>
      {/* <div className="home__team">
        <div className="home__contact__description">
          <h3 className="home__contact__description--title">
            We are a great team, get to know us more.
          </h3>
          <p className="home__contact__description--paragraph">
            Choose to work from office space, co-working environments, business
            lounges or meeting rooms, for as little or as long as you like.
          </p>
          <AnimationNumbers />
        </div>
        <img src={group} alt="busy" className="home__contact__img" />
      </div> */}
      <div className="home__trusted">
        <h3 className="home__trusted--title">Some of our clients.</h3>
        <div className="home__trusted__logos">
          <img src={stetis} alt="stetis" className="home__contact__img" />
          {/* <img src={mtn} alt="mtn" className="home__contact__img" />
          <img src={andela} alt="andela" className="home__contact__img" />
          <img src={contrix} alt="contrix" className="home__contact__img" /> */}
        </div>
      </div>
      {/* <div className="home__remarks">
        <h3 className="home__remarks--title">What people say about us.</h3>
        <CardCarousel />
      </div> */}
    </div>
  );
};

export default Home;
