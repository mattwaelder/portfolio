import React from "react";
import { Section } from "../";
import "./SiteContainer.scss";

const SiteContianer = () => {
  return (
    <div className="App__site-container">
      <Section title={"About"} />
      <Section title={"Skills"} />
      <Section title={"projects"} />
      <Section title={"contact"} />
    </div>
  );
};

export default SiteContianer;
