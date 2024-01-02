import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_hangman from "../../../../../project_images/hangman-sm.webp";
import "../Projects.scss";

const ProjectTsHangman = () => {
  return (
    <div className="App__projects-card">
      <Card className="App__projects-card-element">
        <Card.Img
          className="lazy"
          data-mdb-lazy-src={image_hangman}
          variant="top"
          src={image_hangman}
          alt="project image"
        />
        <Card.Body className="App__project-card-body">
          <Card.Title>Walk the Plank!</Card.Title>
          <Card.Text>
            A game of hangman, sans gallows. This is my first project utilizing
            TypeScript and React together. I've had so much fun building and
            playing this game, give it a try!
          </Card.Text>
          <div className="App__card-btn-wrapper">
            <Button
              href="https://github.com/mattwaelder/hangman/blob/main/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Read Me
            </Button>
            <Button
              href="https://walktheplank.netlify.app"
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
export default ProjectTsHangman;
