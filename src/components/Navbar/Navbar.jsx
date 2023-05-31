import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="App__nav-container">
      <h2>MattLogo</h2>
      <ul className="App__nav-list">
        {["home", "about", "skills", "contact"].map((el) => (
          <li>
            <a href={`#${el}`}>{el}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
