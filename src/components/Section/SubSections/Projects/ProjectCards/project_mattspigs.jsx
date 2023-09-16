import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_mattspigs from "../../../../../project_images/mattspigs-sm.webp";
import "../Projects.scss";

const ProjectMattspigs = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_mattspigs}
          variant="top"
          src={image_mattspigs}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>mattspigs.com</Card.Title>
          <Card.Text>
            A website I created about my guinea pigs using pure html, css, and
            javascript.
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/mattwaelder/mattspigs/blob/readme/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Read Me
            </Button>
            <Button
              href="https://mattspigs.com"
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

export default ProjectMattspigs;
