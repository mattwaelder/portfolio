import React, { useState } from "react";
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
*/
