import React, { useState } from "react";
import "./MyShtuff.css";
import projects from "./projects";
import TypeIt from "typeit-react";

function MyShtuff() {
  const [project, setProject] = useState(projects[0]);

  const deets = project.description;
  const projectName = project.title;
  const displayNextProject = () => {
    //if not at end of array
    if (project.index < projects.length - 1) {
      //move to next array number
      setProject(projects[project.index + 1]);
      return;
    } else {
      setProject(projects[0]);
      return;
    }
  };
  console.log(projects);
  // const displayPreviousProject = () => {
  //   if (project.index > 0) {
  //     setProject(projects[project.index - 1]);
  //   } else {
  //     setProject(projects[projects.length - 1]);
  //   }
  // };
  return (
    <div className="card">
      {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
      <div className="card-body">
        {/* This makes it look like someone is typing the text */}
        <p>
          hello world
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .pause(500)
                .type(projectName)
                .break()
                .pause(500)
                .break()
                .pause(1500)
                .type(deets)
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
          Click Me
        </a>
        <button className="galleryBtn" onClick={displayNextProject}>
          Next Project
          {/* <i className="fa-solid fa-arrow-left"></i> */}
        </button>
      </div>
      {/* <div className="buttonLocation"> */}
      {/* </div> */}
    </div>
  );
}
export default MyShtuff;
