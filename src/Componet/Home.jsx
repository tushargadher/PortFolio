import React from "react";
import svg from "../Media/homeprofile.webp";
const Home = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: 4700,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="infocontainer">
        <div className="devinfo" data-aos="fade-up">
          <span className="about">Hi, I'm</span>
          <div className="name">Tushar Gadher</div>

          <div className="about">
               Software Engineer specializing in Vue.js, Nuxt.js, and GraphQL, passionate about building 
               scalable, high-performance web applications.
          </div>

          <button className="btn" onClick={scrollToSection} >
            Contact Me
          </button>
        </div>
        <div className="devimg">
          <img
            src={svg}
            alt="image is not available"
            data-aos="fade-up"
            className="jumpingSVG"            
          />
        </div>
      </div>
    </>
  );
};
export default Home;
