import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_communitycrossing from "../../../../../project_images/communitycrossing-sm.webp";
import "../Projects.scss";

const ProjectCommunitycrossing = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_communitycrossing}
          variant="top"
          src={image_communitycrossing}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>Community Crossing</Card.Title>
          <Card.Text>
            Fully-featured, full-stack social media application build with 6
            other developers in one week. Firestore handles Auth, a CDN stores
            user content, and coffee supported the developers!
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/blue-ocean-luigi/front-end/blob/main/README.md"
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

export default ProjectCommunitycrossing;
