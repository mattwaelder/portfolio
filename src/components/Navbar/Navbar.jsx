import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="App__nav-container">
      <h2>Matt</h2>
      <ul className="App__nav-list">
        <li>About</li>
        <li>Languages</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
};
export default Navbar;
