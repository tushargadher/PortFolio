import React from "react";
const ProjectComp = React.memo(({ name, description, link }) => {
  return (
    <div className="project">
      <span className="projectTitle">{name}</span>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View</a>
    </div>
  );
});
export default ProjectComp;

