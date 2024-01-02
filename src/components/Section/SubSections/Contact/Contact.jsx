import React from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdArticle } from "react-icons/md";
// import { BiSolidFilePdf } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="App__contact-container">
      <h5>Feel free to reach out!</h5>
      <a
        href="https://docs.google.com/document/d/12urpOQln2E1XjL8L0nGYZs35tTmazi-DnpRmsNV8M-U/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <MdArticle size={35} className="App__contact-icon" />
        <p>My Resume</p>
      </a>
      <a
        href="https://www.github.com/mattwaelder"
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <FaGithub size={35} className="App__contact-icon" />
        <p>github/mattwaelder</p>
      </a>
      <a
        href="https://www.linkedin.com/in/mattwaelder/"
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <FaLinkedin size={35} className="App__contact-icon" />
        <p>linkedin/mattwaelder</p>
      </a>
      <div
        href=""
        target="_blank"
        rel="noreferrer"
        className="App__contact-wrapper"
      >
        <MdEmail size={35} className="App__contact-icon" />
        <p>mattwaelder@gmail.com</p>
      </div>
    </div>
  );
};
export default Contact;

/*
my linkedin, github, and email
*/
