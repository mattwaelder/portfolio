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
      <div>
        <img src={html5} width="100" alt="html logo"></img>
      </div>
      <div>
        <img src={css3} width="100" alt="css logo"></img>
      </div>
      <div>
        <img src={javascript} width="100" alt="javascript logo"></img>
      </div>
      <div>
        <img src={react} width="100" alt="react logo"></img>
      </div>
      <div>
        <img src={nodejs} width="100" alt="nodejs logo"></img>
      </div>
      <div>
        <img src={postgresql_notext} width="100" alt="postgres logo"></img>
      </div>
      <div>
        <img src={mongodb} width="100" alt="mongodb logo"></img>
      </div>
      <div>
        <img src={sass} width="100" alt="sass logo"></img>
      </div>
      <div>
        <img src={aws} width="100" alt="aws logo"></img>
      </div>
      <div>
        <img src={firebase} width="100" alt="firebase logo"></img>
      </div>
    </div>
  );
};

export default Skills;
