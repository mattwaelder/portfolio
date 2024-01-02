import React from "react";
import "./Projects.scss";

import ProjectAssay from "./ProjectCards/project_assay.jsx";
import ProjectCommunityCrossing from "./ProjectCards/project_communitycrossing.jsx";
import ProjectFec from "./ProjectCards/project_fec.jsx";
import ProjectMattspigs from "./ProjectCards/project_mattspigs.jsx";
import ProjectPetscale from "./ProjectCards/project_petscale.jsx";
import ProjectReactCalculator from "./ProjectCards/project_reactcalculator.jsx";
import ProjectSdc from "./ProjectCards/project_sdc.jsx";
import ProjectTsHangman from "./ProjectCards/project_hangman.jsx";

const Projects = () => {
  return (
    <div className="App__projects-container">
      <ProjectPetscale />
      <ProjectAssay />
      <ProjectCommunityCrossing />
      <ProjectMattspigs />
      <ProjectFec />
      <ProjectSdc />
      <ProjectReactCalculator />
      <ProjectTsHangman />
    </div>
  );
};

export default Projects;

/*
<a href="https://www.freepik.com/free-vector/rising-sun-mountains-starry-sky_6538958.htm#query=space&position=1&from_view=search&track=sph">Image by GarryKillian</a> on Freepik

<a href="https://www.freepik.com/free-vector/abstract-background-design-with-stars-gray_3528840.htm#page=2&query=website%20background&position=10&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik
*/
