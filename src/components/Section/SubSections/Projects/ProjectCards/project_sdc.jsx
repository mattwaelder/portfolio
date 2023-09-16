import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_sdc from "../../../../../project_images/sdc-sm.webp";
import "../Projects.scss";

const ProjectSdc = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_sdc}
          variant="top"
          src={image_sdc}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>System Design</Card.Title>
          <Card.Text>
            The backend portion of a mock e-commerce website. The service is
            designed to support 10,000+ users.
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/sdc-green-lantern/RatingsReviews-API/blob/main/README.md"
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

export default ProjectSdc;
