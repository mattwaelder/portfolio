import React from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="App__contact-container">
      <a
        href="https://www.github.com/mattwaelder"
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <FaGithub size={30} className="App__contact-icon" />
        <p>github/mattwaelder</p>
      </a>
      <a
        href="https://www.linkedin.com/in/mattwaelder/"
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <FaLinkedin size={30} className="App__contact-icon" />
        <p>linkedin/in/mattwaelder</p>
      </a>
      <div
        href=""
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <MdEmail size={30} className="App__contact-icon" />
        <p>mattwaelder@gmail.com</p>
      </div>
    </div>
  );
};
export default Contact;

/*
my linkedin, github, and email
*/
