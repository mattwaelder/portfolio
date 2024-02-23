import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_petscale from "../../../../../project_images/petscale-new-sm.webp";
import "../Projects.scss";

const ProjectPetscale = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_petscale}
          variant="top"
          src={image_petscale}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>PetScale</Card.Title>
          <Card.Text>
            A utility created for pet owners to track the weight of their pets
            over time. This application is hosted on AWS utilizing an nginx
            reverse proxy. I use this for my pets.
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/mattwaelder/petscale/blob/master/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Read Me
            </Button>
            <Button
              href="https://petscale.xyz"
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
export default ProjectPetscale;
