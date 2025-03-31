import React from "react";

import ProjectComp from "./ProjectComp";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "ChatApplication",
      description:
        "ChatApplication is a real-time group chat platform where more than two users can chat",
      link: "https://richchatapp.netlify.app/",
    },
    {
      id: 2,
      name: "BookStore",
      description:
        "BookStore is an online platform where users can buy books. This project was developed during the TatvaSoft Summer Intership.",
      link: "https://bookhstore.netlify.app/",
    },
    {
      id: 3,
      name: "FlipKart Clone ",
      description:
        "A Flipkart clone is created with the MERN stack and Redux. It mimics the features of Flipkart, allowing users to browse products, add them to a cart, and manage orders.",
      link: "https://flipkartz.netlify.app/",
    },
    {
      id: 4,
      name: "ChatBox ",
      description:
        "ChatBox is a real-time chat application project that provides users with a platform to communicate with each other in real-time.",
      link: "https://mychatrooms.netlify.app/",
    },
    {
      id: 5,
      name: "CloudNotes",
      description:
        "CloudNotes is a web-based application designed to help users store and manage their notes online on a cloud database.",
      link: "https://cloudnotees.netlify.app/",
    },
    {
      id: 6,
      name: "InMovies",
      description:
        "InMovies is an innovative project that serves as a comprehensive movie and series review and search platform.",
      link: "https://tushargadher.github.io/inMovies/",
    },
    {
      id: 7,
      name: "Excel Weather",
      description:
        "Excel Weather is an innovative project that integrates real-time weather data into a user-friendly platform.",
      link: "https://excelweather.netlify.app/",
    },
    {
      id: 8,
      name: "DailinkNews",
      description:
        "DailinkNews is a comprehensive news platform that aggregates articles from various sources.",
      link: "https://github.com/tushargadher/DailinkNews",
    },
    {
      id: 9,
      name: "Text Analayzer",
      description:
        "Text Analyzer is a project that analyses and processes text and provides users with a range of tools and functionalities.",
      link: "https://tushargadher.github.io/TextBlend/",
    },

    {
      id: 10,
      name: "KeepNote",
      description:
        "KeepNote is a versatile note-taking project designed to provide users with a convenient and organised way to store their notes.",
      link: "https://tushargadher.github.io/KeepNote/",
    },
  ];
  return (
    <>
      <div className="work">
        <div className="head">PORTFOLIO</div>
        <div id="proje">Check out my best work</div>
        <div className="projectContainer" data-aos="fade-up">
          {projects.map((project) => (
            <ProjectComp
              key={project.id}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        <button className="moreproject" data-aos="fade-up">
          <a href="https://github.com/tushargadher?tab=repositories">
            More Project
          </a>
        </button>
      </div>
    </>
  );
};

export default Portfolio;
