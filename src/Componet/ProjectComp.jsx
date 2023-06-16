import React from "react";

const ProjectComp = ({ name, description, link }) => {
  return (
    <>
      <div className="project">
        <span className="projectTitle">{name}</span>

        <p>{description}</p>

        <a href={link}>
          Go Live <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </>
  );
};

export default ProjectComp;
