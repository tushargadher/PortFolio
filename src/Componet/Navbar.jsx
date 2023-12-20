import React, { useRef, useState } from "react";
import Home from "./Home";

import About from "./About";
import Contect from "./Contect";
import Portfolio from "./Portfolio";

function Navbar(props) {
  const home = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 450) {
      setVisible(true);
    } else if (scrolled <= 450) {
      setVisible(false);
    }
  };

  //when user scroll this function is called
  window.addEventListener("scroll", toggleVisible);

  //to navigate user into different section
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="Nav">
        <ul>
          <span id="myname" data-aos="fade-down">
            {props.myname}
          </span>
          <span className="navigation">
            <li onClick={() => scrollToSection(home)} data-aos="fade-down">
              Home
            </li>
            <li onClick={() => scrollToSection(about)} data-aos="fade-down">
              About
            </li>
            <li onClick={() => scrollToSection(portfolio)} data-aos="fade-down">
              Projects
            </li>
            <li onClick={() => scrollToSection(contact)} data-aos="fade-down">
              Contact
            </li>
            <li data-aos="fade-down">
              <a href="https://drive.google.com/file/d/1I1XMlDgyqOz-LX4dheEWmEh1Ez7AKcKJ/view">
                Resume
              </a>
            </li>
          </span>
        </ul>
      </div>
      {visible ? (
        <button id="topBtn" onClick={handleTopClick}>
          <i className="bx bx-up-arrow-alt"></i>
        </button>
      ) : (
        ""
      )}

      <section ref={home} className="section ">
        <Home />
      </section>
      <section ref={about} className="section ">
        <About />
      </section>
      <section ref={portfolio} className="section">
        <Portfolio />
      </section>
      <section ref={contact} className="section" id="contect">
        <Contect />
      </section>
      <section className="credit">
        <p>Made with ❤️ by Tushar</p>
      </section>
    </>
  );
}
export default Navbar;
