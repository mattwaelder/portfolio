import React from "react";
import profile_pic from "../../../../project_images/profilepic.jpeg";
import "./About.scss";

const About = () => {
  return (
    <div className="App__about-container">
      <h3>
        Hello!<br></br> My name is Matt Waelder <br></br>and I'm a full stack
        developer
      </h3>
      <img src={profile_pic} alt="myself"></img>
      <p>
        I was first drawn to software development for its use as a tool, but
        soon was drawn to its creative possibility. For web design I was seeing
        it initially as computer-legos, but pretty quickly on I realized you can
        change the color or the shadow of the legos and all of a sudden the
        analogy kind of breaks down into something far more interesting. I've
        been working with Javascript for a few years now, I've created
        applicaitons, some of which you can see below, and I've learned a lot.
        Most recently, in 2022, I decided that I wanted to be a software
        engineer full-time, so I signed up for <i>Hack Reactor</i> to
        accellerate a career change. Since then I've been working at my day job
        and coding / applying for work in my off time. I still get excited every
        time I start a new project and I can't wait to bring my skills to the
        workplace.
      </p>
    </div>
  );
};

export default About;
