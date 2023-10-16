import React from "react";
import svg from "../Media/homeprofile2.jpg";
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

          {/* <div className="about">I'm a Web Developer and Designer based in Surat. I consider myself as a Programmer that turns coffee into code, able to adapt to all sorts of constraints, languages and technologies. I build complete and efficient products and love doing it. Don't hesitate to get in touch!</div> */}
          <div className="about">
            I'm a web developer passionate about creating beautiful and
            functional websites. Let's work together to build something
            amazing!!
          </div>

          <button className="btn" onClick={scrollToSection}>
            Contact Me
          </button>
        </div>
        <div className="devimg">
          <img
            src={svg}
            alt="looks like it's missing..."
            data-aos="fade-up"
            className="jumpingSVG"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
