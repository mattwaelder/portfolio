import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_calculator from "../../../../../project_images/calculator-sm.webp";
import "../Projects.scss";

const ProjectReactcalCulator = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_calculator}
          variant="top"
          src={image_calculator}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>React Calculator</Card.Title>
          <Card.Text>
            A "simple" calculator created with React and Javascript.
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/mattwaelder/calculator/blob/readme/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Read Me
            </Button>
            <Button
              href="https://reactcalc-mw.netlify.app/"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Visit Site
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProjectReactcalCulator;
