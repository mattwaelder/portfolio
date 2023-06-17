import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { Navbar, NavbarMobile, SiteContainer, Section } from "./components";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="App">
      {mobileMenu ? <NavbarMobile /> : <Navbar />}
      <SiteContainer />
    </div>
  );
}

export default App;

/*
  maybe set up menu to swap w/ css media query instead
    render both, but hide/show based on screen width


  github and linkedin right at the top, perhaps?
*/
