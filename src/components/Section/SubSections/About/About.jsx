import React from "react";
import profile_pic from "../../../../project_images/profilepic.jpeg";
import "./About.scss";

const About = () => {
  return (
    <div className="App__about-container">
      <h3>
        Hello!<br></br> I'm Matt Waelder <br></br>and I'm a full-stack developer
      </h3>
      <img src={profile_pic} alt="myself"></img>
      <p>
        I'm someone who's always loved the process of building, whether thats
        building a nice looking application or an efficient data pipeline, it's
        just fun. I got into software development as a bit of an accident a few
        years ago, but because of how much I love it I've decided that this is
        the place for me; and I'm making a career out of it! I've been working
        with Javascript for a few years now, and in 2022 I graduated from{" "}
        <i>Hack Reactor</i>. Since graduating I've been building applications in
        my spare time while continuing to work and apply for developer roles. If
        you've got recommendations for technologies, suggestions my apps, or are
        someone who's hiring for an engineering position, lets have a chat!
      </p>
    </div>
  );
};

export default About;
