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
              A website I created with pure html, css, and javascript.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_calculator} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>React Calculator</Card.Title>
            <Card.Text>A simple calculator created with React.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_assay} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>Assay Utility</Card.Title>
            <Card.Text>
              A utility I created for a discord group. The utility provides
              insight into in-game value for mining deposits.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
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
            <Button variant="primary">Go somewhere</Button>
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
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="App__projects-card">
        <Card className="App__projects-card-element">
          <Card.Img variant="top" src={image_fec} alt="project image" />
          <Card.Body className="App__project-card-body">
            <Card.Title>Fresh Threadz</Card.Title>
            <Card.Text>E-commerce front end designed with react.</Card.Text>
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

<a href="https://www.freepik.com/free-vector/squared-shapes-white-texture_851199.htm#page=2&query=website%20background&position=22&from_view=search&track=ais">Image by dotstudio</a> on Freepik

<a href="https://www.freepik.com/free-vector/80-style-background-with-geometric-shapes_4992801.htm#page=2&query=80s%20retro&position=47&from_view=search&track=ais">Image by pikisuperstar</a> on Freepik

Image by <a href="https://www.freepik.com/free-vector/white-abstract-background_12066108.htm#page=2&query=website%20background&position=29&from_view=search&track=ais">Freepik</a>

<a href="https://www.freepik.com/free-vector/dark-polygonal-background_6076273.htm#page=3&query=background&position=29&from_view=search&track=sph">Image by vector_corp</a> on Freepik

<a href="https://www.freepik.com/free-vector/white-grunge-distressed-texture-vector_3782075.htm#page=9&query=background&position=47&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik

<a href="https://www.freepik.com/free-vector/rising-sun-mountains-starry-sky_6538958.htm#query=space&position=1&from_view=search&track=sph">Image by GarryKillian</a> on Freepik

*/
