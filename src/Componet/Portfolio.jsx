import React from "react";

import ProjectComp from "./ProjectComp";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "ChatBox ",
      description:
        "ChatBox is a real-time chat application project provides users with a platform to communicate with each other in real-time.",
      link: "https://mychatrooms.netlify.app/",
    },
    {
      id: 2,
      name: "CloudNotes",
      description:
        "CloudNotes is a web-based application designed to help users store and manage their notes online on the cloud",
      link: "https://cloudnotees.netlify.app/",
    },
    {
      id: 3,
      name: "InMovies",
      description:
        "InMovies is an innovative project that serves as a comprehensive movie and series review and search platform.",
      link: "https://tushargadher.github.io/inMovies/",
    },
    {
      id: 4,
      name: "Excel Weather",
      description:
        "Excel Weather is an innovative project that integrates real-time weather data into a user-friendly platform.",
      link: "https://excelweather.netlify.app/",
    },
    {
      id: 5,
      name: "DailinkNews",
      description:
        "DailinkNews is a comprehensive news platform that aggregates articles from various sources.",
      link: "https://github.com/tushargadher/DailinkNews",
    },
    {
      id: 6,
      name: "Text Analayzer",
      description:
        "Text Analyzer is a project which analyze and process text and provides users with a range of tools and functionalities.",
      link: "https://tushargadher.github.io/TextBlend/",
    },

    {
      id: 7,
      name: "KeepNote",
      description:
        "KeepNote is a versatile note-taking project designed to provide users with a convenient and organized way to store their notes.",
      link: "https://tushargadher.github.io/KeepNote/",
    },
  ];
  return (
    <>
      <div div className="work">
        <div className="head">PORTFOLIO</div>
        <div id="proje">Check out my best work</div>
        {/* project contaairt */}
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
