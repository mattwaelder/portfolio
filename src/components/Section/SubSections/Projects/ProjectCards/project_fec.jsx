import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_fec from "../../../../../project_images/fec-sm.webp";
import "../Projects.scss";

const ProjectFec = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_fec}
          variant="top"
          src={image_fec}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>Fresh Threadz</Card.Title>
          <Card.Text>
            E-commerce front end built with React. This was built with a team of
            engineers; I was in charge of the reviews component.
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/FEC-Boy-Meets-World/rfp2207-fec/blob/main/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Read Me
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectFec;
