import React from "react";
import "./Skills.scss";
// import {
//   aws,
//   css3,
//   firebase,
//   html5,
//   javascript,
//   mongodb,
//   nodejs,
//   postgresql_notext,
//   postgresql,
//   react,
//   sass,
// } from "../../../../tech_icons";
import html5 from "../../../../tech_icons/html5.svg";
import css3 from "../../../../tech_icons/css3.svg";
import firebase from "../../../../tech_icons/firebase.svg";
import aws from "../../../../tech_icons/aws.svg";
import javascript from "../../../../tech_icons/javascript.svg";
import mongodb from "../../../../tech_icons/mongodb.svg";
import nodejs from "../../../../tech_icons/nodejs.svg";
import postgresql_notext from "../../../../tech_icons/postgresql_notext.svg";
import postgresql from "../../../../tech_icons/postgresql.svg";
import react from "../../../../tech_icons/react.svg";
import sass from "../../../../tech_icons/sass.svg";

const Skills = () => {
  return (
    <div className="App__skills-container">
      <div className="App__skill-icon-wrapper">
        <img src={html5} alt="html logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={css3} alt="css logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={javascript} alt="javascript logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={react} alt="react logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={nodejs} alt="nodejs logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={postgresql_notext} alt="postgres logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={mongodb} alt="mongodb logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={sass} alt="sass logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={aws} alt="aws logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={firebase} alt="firebase logo"></img>
      </div>
    </div>
  );
};

export default Skills;
