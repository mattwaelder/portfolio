import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="App__nav-container">
      <p className="App__nav-name-logo">
        Matt<br></br>Waelder
      </p>
      <ul className="App__nav-list">
        {["About", "Skills", "Projects", "Contact"].map((el) => (
          <li className="App__nav-btn">
            <a href={`#${el}`}>{el}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
