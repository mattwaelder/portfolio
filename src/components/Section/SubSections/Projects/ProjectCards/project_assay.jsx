import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_assay from "../../../../../project_images/assay-sm.webp";
import "../Projects.scss";

const ProjectAssay = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_assay}
          variant="top"
          src={image_assay}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>Assay Utility</Card.Title>
          <Card.Text>
            A utility I created in conjunction with a discord community for use
            within a game. This utility provides insight into whether or not a
            certain rock is worth mining.
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/mattwaelder/sc-deposit-calculator/blob/readme/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Read Me
            </Button>
            <Button
              href="https://sai.thesyndicus.org/"
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
export default ProjectAssay;
