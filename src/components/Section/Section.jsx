import React from "react";
import "./Section.scss";

const Section = ({ title }) => {
  console.log(title);
  return (
    <div className="App__section-container">
      <h1>{`${title}`}</h1>
    </div>
  );
};
export default Section;
