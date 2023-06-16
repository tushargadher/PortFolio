import React from "react";
import profile from "../Media/Profile.jpeg";

import html from "../SkillsImg/html.png";
import css from "../SkillsImg/css.png";
import js from "../SkillsImg/javascript.png";
import php from "../SkillsImg/php.png";
import python from "../SkillsImg/python.png";
import bootstrap from "../SkillsImg/bootstrap.png";
import ccc from "../SkillsImg/c++.png";
import java from "../SkillsImg/java.png";
import react from "../SkillsImg/react.png";
import node from "../SkillsImg/nodejs.png";
import mongo from "../SkillsImg/mongo.png";
import taliwind from "../SkillsImg/taliwindcss.png";
import c from "../SkillsImg/c.png";
import mysql from "../SkillsImg/mysql.png";
import git from "../SkillsImg/git.png";
import jqurey from "../SkillsImg/jqurey.png";
import npm from "../SkillsImg/npm.png";
import netlify from "../SkillsImg/netlify.png";
import postman from "../SkillsImg/postman.png";
import matrialui from "../SkillsImg/matrialUi.png";

function About() {
  return (
    <>
      <div className="intro">
        <div className="head">About me</div>
        <div className="aboutme" data-aos="fade-right">
          <h4>ABOUT</h4>
          <h1 className="introHead">KNOW MORE ABOUT ME</h1>
          <div className="mydetail">
            <img src={profile} alt="Profile not available" />
            <div className="detail">
              <h1 style={{ color: "#0065FF" }}>Full Stack Web Developer</h1>
              <p id="p">
                I'm a Web Developer based in Surat. I went to Gandhi college in
                Surat.currently i'm pursuing bachelors of Information Technology
                from Goverment Engineering Collage, Gandhinager.I enjoy building
                Web apps, platforms, APIs and everything in between.When
                confronted with a challenge, may it be technical or not, I never
                give up until I found the solution. This might be what describes
                me best in my daily work.
              </p>
            </div>
          </div>
        </div>

        <div className="skillcontainer" data-aos="fade-left">
          <h1 className="HeadSkill">SKILLS & TOOLS</h1>
          <div className="skill" data-aos="zoom-in-up" data-title="HTML">
            <img src={html} alt="html" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="CSS">
            <img src={css} alt="css" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="JavaScript">
            <img src={js} alt="javascript" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Python">
            <img src={python} alt="python" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="PHP">
            <img src={php} alt="php" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="C++">
            <img src={ccc} alt="c++" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="C language">
            <img src={c} alt="c" />
          </div>

          <div className="skill" data-aos="zoom-in-up" data-title="Java">
            <img src={java} alt="java" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="ReactJs">
            <img src={react} alt="react" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NodeJs">
            <img src={node} alt="node" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="MongoDB">
            <img src={mongo} alt="mongodb" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Bootstrap">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div
            className="skill"
            data-aos="zoom-in-up"
            data-title="Taliwind CSS"
          >
            <img src={taliwind} alt="taliwind" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="JQuery">
            <img src={jqurey} alt="jqurey" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="MySQL">
            <img src={mysql} alt="mysql" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Git">
            <img src={git} alt="git" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="NPM">
            <img src={npm} alt="npm" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Netlify">
            <img src={netlify} alt="netlify" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="PostMan">
            <img src={postman} alt="postman" />
          </div>
          <div className="skill" data-aos="zoom-in-up" data-title="Material UI">
            <img src={matrialui} alt="postman" />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
