import React from "react";
import "./Section.scss";
import { About, Skills, Projects, Contact } from "./SubSections";

const Section = ({ title }) => {
  console.log(title);
  return (
    <div className="App__section-container">
      <h1>{`${title}`}</h1>
      {title === "About" ? <About /> : ""}
      {title === "Skills" ? <Skills /> : ""}
      {title === "Projects" ? <Projects /> : ""}
      {title === "Contact" ? <Contact /> : ""}
    </div>
  );
};
export default Section;
