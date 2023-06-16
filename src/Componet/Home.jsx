import React from "react";
import svg from "../Media/Class.jpg";
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
          <div className="name">
            Tushar Gadher 
          </div>

          {/* <div className="about">I'm a Web Developer and Designer based in Surat. I consider myself as a Programmer that turns coffee into code, able to adapt to all sorts of constraints, languages and technologies. I build complete and efficient products and love doing it. Don't hesitate to get in touch!</div> */}
          <div className="about">
            I'm a web developer passionate about creating beautiful and
            functional websites. Let's work together to build something
            amazing!!
          </div>
          {/* <div className="social">
            <div className="social-item">
              <a href="https://www.linkedin.com/in/tushar-gadher-211bb2175/">
                <i
                  className="bx bxl-linkedin-square"
                  style={{ color: "#0E76A8" }}
                ></i>
              </a>
            </div>
            <div className="social-item">
              <a href="https://wa.me/+919512887819">
                <i
                  className="bx bxl-whatsapp-square "
                  style={{ color: "#1AD03F" }}
                ></i>
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.facebook.com/tushar.gadher.568/">
                <i
                  className="bx bxl-facebook-circle "
                  style={{ color: "#1771E6" }}
                ></i>
              </a>
            </div>

            <div className="social-item instagram">
              <a href="https://www.instagram.com/tushargadher25/">
                <i
                  className="bx bxl-instagram-alt "
                  style={{ color: "#E4405F" }}
                ></i>
              </a>
            </div>
            <div className="social-item">
              <a href="https://t.me/tushargadher">
                <i
                  className="bx bxl-telegram  "
                  style={{ color: "#269FDE" }}
                ></i>
              </a>
            </div>
            <div className="social-item">
              <a href="https://github.com/tushargadher">
                <i className="bx bxl-github " style={{ color: "gray" }}></i>
              </a>
            </div>

            <div className="social-item">
              <a href="https://twitter.com/Tushar71886645">
                <i
                  className="bx bxl-twitter  "
                  style={{ color: "#1C93E4" }}
                ></i>
              </a>
            </div>
          </div> */}
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
