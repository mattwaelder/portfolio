import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Projects.scss";
import image_mattspigs from "../../../../project_images/mattspigs.png";
import image_assay from "../../../../project_images/assay.png";
import image_calculator from "../../../../project_images/calculator.png";
import image_sdc from "../../../../project_images/sdc.png";
import image_fec from "../../../../project_images/fec.png";
import image_petscale from "../../../../project_images/petscale.png";

const Projects = () => {
  return (
    <div className="App__projects-container">
      <div className="App__projects-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image_mattspigs} alt="project image" />
          <Card.Body>
            <Card.Title>mattspigs.com</Card.Title>
            <Card.Text>
              A website I created with pure html,scc, and javascript.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image_calculator} alt="project image" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image_assay} alt="project image" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image_petscale} alt="project image" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image_sdc} alt="project image" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image_fec} alt="project image" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;

/*
mattspigs.com
calculator
mining calculator
sdc
petscale
fec
portfolio site?
*/

/*
Image by <a href="https://www.freepik.com/free-vector/white-abstract-background-3d-paper-style_6600343.htm#query=website%20background&position=4&from_view=search&track=ais">Freepik</a>


<a href="https://www.freepik.com/free-vector/modern-stylish-texture-background_15678942.htm#query=website%20background&position=12&from_view=search&track=ais">Image by svstudioart</a> on Freepik
*/
