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
        <div className="aboutme" data-aos="fade-up">
          <h4>ABOUT</h4>
          <h1 className="introHead">KNOW MORE ABOUT ME</h1>
          <div className="mydetail">
            <img src={profile} alt="Profile not available" />
            <div className="detail">
              <h1 style={{ color: "#0065FF" }}>Full Stack Web Developer</h1>
              <p id="p">
                Hello! I'm Tushar Gadher, and I love building cool stuff on the internet. I'm a Full Stack MERN Developer, which means I work with databases, make websites look nice, and ensure everything runs smoothly behind the scenes. I have a degree in information technology, but what I love most is turning ideas into real, functional websites. From how a website looks to how it works, I enjoy every part of the process. Let's team up and create websites that not only work well but also look awesome! Super excited to take on new coding adventures and bring ideas to life!
              </p>
            </div>
          </div>
        </div>

        <div className="skillcontainer" data-aos="fade-up">
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
