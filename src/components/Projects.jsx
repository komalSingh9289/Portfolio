import React from "react";
import ProjectList from "./ProjectList";
const Projects = () => {
  return (
    <section className="proj-section">
      <div className="main-content">
        <div className="project-content">
          <h1 className="title">Projects</h1>
          <ProjectList />
        </div>
      </div>
    </section>
  );
};

export default Projects;
