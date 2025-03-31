import React, { useRef, useState, useEffect, useCallback } from "react";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import Portfolio from "./Portfolio";

function Navbar({ myname }) {
  const home = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible); // ✅ Cleanup
  }, []);

  const scrollToSection = useCallback((elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="Nav">
        <ul>
          <span id="myname" data-aos="fade-down">
            {myname}
          </span>
          <span className="navigation">
            <li onClick={() => scrollToSection(home)} data-aos="fade-down">
              Home
            </li>
            <li onClick={() => scrollToSection(about)} data-aos="fade-down">
              About
            </li>
            <li onClick={() => scrollToSection(portfolio)} data-aos="fade-down">
              Work
            </li>
            <li onClick={() => scrollToSection(contact)} data-aos="fade-down">
              Contact
            </li>
            <li data-aos="fade-down">
              <a href="https://drive.google.com/file/d/1ETv8gKTFOrIg7Rk-VRoV8R2Af2YUX7MM/view">
              CV
              </a>
            </li>
          </span>
        </ul>
      </div>

      {visible && (
        <button id="topBtn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <i className="bx bx-up-arrow-alt"></i>
        </button>
      )}

      <section ref={home} className="section">
        <Home />
      </section>
      <section ref={about} className="section">
        <About />
      </section>
      <section ref={portfolio} className="section">
        <Portfolio />
      </section>
      <section ref={contact} className="section" id="contect">
        <Contect />
      </section>

      <section className="credit">
        <p>Developed by Tushar</p>
      </section>
    </>
  );
}

export default React.memo(Navbar);
