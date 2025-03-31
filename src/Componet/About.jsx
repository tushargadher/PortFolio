import React from "react";

function About() {
  return (
    <>
      <div className="intro">
        <div className="head">About me</div>
        <div className="aboutme" data-aos="fade-up">
          <h4>ABOUT</h4>
          <h1 className="introHead">KNOW MORE ABOUT ME</h1>
          <div className="mydetail">
            <img src="src\Media\Profile.webp" alt="Profile not available" loading="lazy" />
            <div className="detail">
              <h1 style={{ color: "#0065FF" }}>Software Engineer | Full Stack Developer</h1>
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
            <img src="src\SkillsImg\html.png" alt="html" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="CSS">
            <img src="src\SkillsImg\css.png" alt="css" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="JavaScript">
            <img src="src\SkillsImg\javascript.png" alt="javascript" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="ReactJs">
            <img src="src\SkillsImg\react.png" alt="react" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="VueJS">
            <img src="src\SkillsImg\vue.png" alt="vuejs" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NuxtJs">
            <img src="src\SkillsImg\nuxt.png" alt="nuxtjs" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NodeJs">
            <img src="src\SkillsImg\nodejs.png" alt="node" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="MongoDB">
            <img src="src\SkillsImg\mongo.png" alt="mongodb" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Bootstrap">
            <img src="src\SkillsImg\bootstrap.png" alt="bootstrap" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Tailwind CSS">
            <img src="src\SkillsImg\taliwindcss.png" alt="tailwind" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="JQuery">
            <img src="src\SkillsImg\jqurey.png" alt="jquery" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="MySQL">
            <img src="src\SkillsImg\mysql.png" alt="mysql" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Git">
            <img src="src\SkillsImg\git.png" alt="git" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NPM">
            <img src="src\SkillsImg\npm.png" alt="npm" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Netlify">
            <img src="src\SkillsImg\netlify.png" alt="netlify" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="PostMan">
            <img src="src\SkillsImg\postman.png" alt="postman" loading="lazy"/>
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Material UI">
            <img src="src\SkillsImg\matrialUi.png" alt="material-ui" loading="lazy"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
