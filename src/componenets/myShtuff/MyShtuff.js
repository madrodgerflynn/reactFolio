import React, { useState } from "react";
import "./MyShtuff.css";
import projects from "./projects";

function MyShtuff() {
  const [project, setProject] = useState(projects[0]);

  const displayNextProject = () => {
    if (project.index < projects.length - 1) {
      setProject(projects[project.index + 1]);
      return;
    } else {
      setProject(projects[0]);
      return;
    }
  };
  const displayPreviousProject = () => {
    if (project.index > 0) {
      setProject(projects[project.index - 1]);
    } else {
      setProject(projects[projects.length - 1]);
    }
  };
  return (
    <div className="card">
      {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description} </p>
        <a className="projectLinks" target="_blank" href={project.appLink}>
          Go somewhere
        </a>
      </div>
      <div className="buttonLocation">
        <button className="galleryBtn" onClick={displayPreviousProject}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </div>
  );
}
export default MyShtuff;
