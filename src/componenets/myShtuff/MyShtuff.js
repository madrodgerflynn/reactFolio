import React, { useState } from "react";
import "./MyShtuff.css";
import projects from "./projects";
import TypeIt from "typeit-react";

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
        {/* <TypeIt
          options={{
            speed: 60,
          }}
          element={"h5"}
        >
          {project.title}
        </TypeIt> */}
        <p>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .pause(500)
                .type(project.title)
                .break()
                .pause(500)
                .break()
                .pause(1500)
                .type(project.description)
                .break()
                .pause(700)
                .type("Want to see it?");
              return instance;
            }}
            element={"p"}
          ></TypeIt>
        </p>
        <a
          className="projectLinks"
          target="_blank"
          rel="noreferrer"
          href={project.appLink}
        >
          Go somewhere
        </a>
        <button className="galleryBtn" onClick={displayNextProject}>
          {/* <i className="fa-solid fa-arrow-left"></i> */}
        </button>
      </div>
      {/* <div className="buttonLocation"> */}
      {/* </div> */}
    </div>
  );
}
export default MyShtuff;
