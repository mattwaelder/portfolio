import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_mattspigs from "../../../../project_images/mattspigs.png";
import image_assay from "../../../../project_images/assay.png";
import image_calculator from "../../../../project_images/calculator.png";
import image_sdc from "../../../../project_images/sdc.png";
import image_fec from "../../../../project_images/fec.png";
import image_petscale from "../../../../project_images/petscale.png";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="App__projects-container">
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_mattspigs} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>mattspigs.com</Card.Title>
            <Card.Text>
              A website I created about my guinea pigs using pure html, css, and
              javascript.
            </Card.Text>
            <Button
              href="https://mattspigs.com"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_calculator} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>React Calculator</Card.Title>
            <Card.Text>
              A simple calculator created with React and Javascript.
            </Card.Text>
            <Button
              href="https://github.com/mattwaelder/calculator/blob/main/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_assay} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>Assay Utility</Card.Title>
            <Card.Text>
              A utility I created in conjunction with a discord community for
              use within a game. This utility provides insight into whether or
              not a certain rock is worth mining.
            </Card.Text>
            <Button
              href="https://sai.thesyndicus.org/"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_petscale} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>PetScale</Card.Title>
            <Card.Text>
              A utility created for pet owners to track the weight of their pets
              over time.
            </Card.Text>
            <Button
              href="https://github.com/mattwaelder/petscale/blob/master/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_sdc} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>System Design</Card.Title>
            <Card.Text>
              The backend portion of a mock e-commerce website. The service is
              designed to support 10,000+ users.
            </Card.Text>
            <Button
              href="https://github.com/sdc-green-lantern/RatingsReviews-API/blob/main/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_fec} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>Fresh Threadz</Card.Title>
            <Card.Text>E-commerce front end designed with react.</Card.Text>
            <Button
              href="https://github.com/FEC-Boy-Meets-World/rfp2207-fec/blob/main/README.md"
              target="_blank"
              variant="light"
              className="App__project-card-btn"
            >
              Repo
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;

/*
<a href="https://www.freepik.com/free-vector/rising-sun-mountains-starry-sky_6538958.htm#query=space&position=1&from_view=search&track=sph">Image by GarryKillian</a> on Freepik

<a href="https://www.freepik.com/free-vector/abstract-background-design-with-stars-gray_3528840.htm#page=2&query=website%20background&position=10&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik
*/
