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
import nginx from "../../../../tech_icons/nginx.svg";
import bootstrap from "../../../../tech_icons/bootstrap.svg";

const Skills = () => {
  return (
    <div className="App__skills-container">
      <div className="App__skill-icon-wrapper">
        <img src={html5} loading="lazy" alt="html logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={css3} loading="lazy" alt="css logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={javascript} loading="lazy" alt="javascript logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={react} loading="lazy" alt="react logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={nodejs} loading="lazy" alt="nodejs logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={postgresql_notext} loading="lazy" alt="postgres logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={mongodb} loading="lazy" alt="mongodb logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={sass} loading="lazy" alt="sass logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={aws} loading="lazy" alt="aws logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={firebase} loading="lazy" alt="firebase logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={nginx} loading="lazy" alt="css logo"></img>
      </div>
      <div className="App__skill-icon-wrapper">
        <img src={bootstrap} loading="lazy" alt="css logo"></img>
      </div>
    </div>
  );
};

export default Skills;
