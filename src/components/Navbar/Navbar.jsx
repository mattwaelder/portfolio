import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="App__nav-container">
      <p className="App__nav-name-logo">
        Matt<br></br>Waelder
      </p>
      <ul className="App__nav-list">
        {["home", "about", "skills", "projects", "contact"].map((el) => (
          <li>
            <a href={`#${el}`}>{el}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
