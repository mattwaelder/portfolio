import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";

import { Navbar, SiteContainer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteContainer />
      <footer>
        <div className="App__footer-container">
          <div className="App__citation-wrapper">
            {" "}
            <a href="https://www.freepik.com/free-vector/rising-sun-mountains-starry-sky_6538958.htm#query=space&position=1&from_view=search&track=sph">
              Image by GarryKillian
            </a>{" "}
            on Freepik
          </div>
          <div className="App__citation-wrapper">
            <a href="https://www.freepik.com/free-vector/abstract-background-design-with-stars-gray_3528840.htm#page=2&query=website%20background&position=10&from_view=search&track=ais">
              Image by rawpixel.com
            </a>{" "}
            on Freepik
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

/*
  github and linkedin right at the top, perhaps?

  default links are blue
  site lagging because of the images on the project cards
  bio paragraph is meh
  image in bio is meh
  the mobile menu... isnt good enough
  change favicon and tab name
*/
