import React from "react";

// Import profile image
import profileImg from "../Media/Profile.webp";

// Import skill images
import htmlImg from "../SkillsImg/html.png";
import cssImg from "../SkillsImg/css.png";
import jsImg from "../SkillsImg/javascript.png";
import reactImg from "../SkillsImg/react.png";
import vueImg from "../SkillsImg/vue.png";
import nuxtImg from "../SkillsImg/nuxt.png";
import nodeImg from "../SkillsImg/nodejs.png";
import mongoImg from "../SkillsImg/mongo.png";
import bootstrapImg from "../SkillsImg/bootstrap.png";
import tailwindImg from "../SkillsImg/taliwindcss.png";
import jqueryImg from "../SkillsImg/jqurey.png";
import mysqlImg from "../SkillsImg/mysql.png";
import gitImg from "../SkillsImg/git.png";
import npmImg from "../SkillsImg/npm.png";
import netlifyImg from "../SkillsImg/netlify.png";
import postmanImg from "../SkillsImg/postman.png";
import materialUiImg from "../SkillsImg/matrialUi.png";

function About() {
  return (
    <>
      <div className="intro">
        <div className="head">About me</div>
        <div className="aboutme" data-aos="fade-up">
          <h4>ABOUT</h4>
          <h1 className="introHead">KNOW MORE ABOUT ME</h1>
          <div className="mydetail">
            <img src={profileImg} alt="Profile not available" loading="lazy" />
            <div className="detail">
              <h1 style={{ color: "#0065FF" }}>
                Software Engineer | Full Stack Developer
              </h1>
              <p id="p">
                Hello! I'm Tushar Gadher, a results-driven Software Engineer specializing in Vue.js, Nuxt.js, JavaScript, and GraphQL.
                I have experience developing scalable, high-performance web applications and optimizing frontend architecture.
                At Cybercom Creation, I worked on the 1StopBedrooms project, enhancing UI performance and integrating efficient
                GraphQL-based data fetching. My expertise spans front-end and back-end technologies, including React.js,
                Node.js, Express.js, MySQL, and MongoDB. With a strong foundation in web development and a degree in Information Technology,
                I'm eager to take on new challenges and contribute to innovative projects. Let's collaborate to build seamless, efficient, and
                user-friendly web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="skillcontainer" data-aos="fade-up">
          <h1 className="HeadSkill">SKILLS & TOOLS</h1>
          <div className="skill" data-aos="zoom-in-up" data-title="HTML">
            <img src={htmlImg} alt="HTML" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="CSS">
            <img src={cssImg} alt="CSS" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="JavaScript">
            <img src={jsImg} alt="JavaScript" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="ReactJs">
            <img src={reactImg} alt="React" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="VueJS">
            <img src={vueImg} alt="VueJS" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NuxtJs">
            <img src={nuxtImg} alt="NuxtJS" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NodeJs">
            <img src={nodeImg} alt="NodeJS" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="MongoDB">
            <img src={mongoImg} alt="MongoDB" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Bootstrap">
            <img src={bootstrapImg} alt="Bootstrap" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Tailwind CSS">
            <img src={tailwindImg} alt="Tailwind CSS" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="JQuery">
            <img src={jqueryImg} alt="JQuery" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="MySQL">
            <img src={mysqlImg} alt="MySQL" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Git">
            <img src={gitImg} alt="Git" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NPM">
            <img src={npmImg} alt="NPM" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Netlify">
            <img src={netlifyImg} alt="Netlify" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="PostMan">
            <img src={postmanImg} alt="Postman" loading="lazy" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Material UI">
            <img src={materialUiImg} alt="Material UI" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
