import React, { useState } from "react";
import "./Navbar.scss";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    let btn = document.getElementById("App__mobile-menu-container");
    btn.classList.toggle("active");
  };

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
      <div className="App__nav-mobile-container">
        {!mobileMenu && (
          <RxHamburgerMenu
            className="App__mobile-nav-icon"
            size={40}
            onClick={() => openMobileMenu()}
          />
        )}
        {
          <div
            className="App__mobile-menu-container"
            id="App__mobile-menu-container"
          >
            <RxCross2
              className="App__mobile-nav-icon"
              size={40}
              onClick={() => openMobileMenu()}
            />
            <ul className="App__nav-list-mobile">
              {["About", "Skills", "Projects", "Contact"].map((el, i) => (
                <a
                  href={`#${el}`}
                  className={`App__nav-btn-mobile ${
                    i % 2 === 0 ? "light" : "dark"
                  }`}
                  onClick={() => openMobileMenu()}
                >
                  <p>{el}</p>
                </a>
              ))}
            </ul>
          </div>
        }
      </div>
    </nav>
  );
};
export default Navbar;
