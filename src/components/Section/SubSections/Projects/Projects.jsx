import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image_mattspigs from "../../../../project_images/mattspigs-sm.webp";
import image_assay from "../../../../project_images/assay-sm.webp";
import image_calculator from "../../../../project_images/calculator-sm.webp";
import image_sdc from "../../../../project_images/sdc-sm.webp";
import image_fec from "../../../../project_images/fec-sm.webp";
import image_petscale from "../../../../project_images/petscale-sm.webp";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="App__projects-container">
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
              A simple calculator created with React and Javascript.
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
              A utility I created in conjunction with a discord community for
              use within a game. This utility provides insight into whether or
              not a certain rock is worth mining.
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
              over time.
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
            </div>
          </Card.Body>
        </Card>
      </div>
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
            <Card.Text>E-commerce front end designed with react.</Card.Text>
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
    </div>
  );
};

export default Projects;

/*
<a href="https://www.freepik.com/free-vector/rising-sun-mountains-starry-sky_6538958.htm#query=space&position=1&from_view=search&track=sph">Image by GarryKillian</a> on Freepik

<a href="https://www.freepik.com/free-vector/abstract-background-design-with-stars-gray_3528840.htm#page=2&query=website%20background&position=10&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik
*/
