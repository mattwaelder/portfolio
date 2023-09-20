import React from "react";
import profile_pic from "../../../../project_images/profilepic1.webp";
import "./About.scss";

const About = () => {
  return (
    <div className="App__about-container">
      <h3>
        Hello!<br></br> I'm Matt Waelder, <br></br>a full-stack developer
      </h3>
      <img src={profile_pic} alt="myself"></img>
      <p>
        I'm someone who's always loved the process of building, whether that's
        building a nice looking application, an efficient data pipeline, or
        something more physical; it's just fun. I first got into coding a few
        years ago, and because of how much I enjoy it, I've decided to pursue a
        career in software engineering! After getting the fundamentals of
        JavaScript down I decided to take a very big leap, and in 2022 I
        attended and graduated from <i>Hack Reactor</i>. Since graduating I've
        been building applications in my spare time while continuing to work and
        apply for developer roles. If you've got recommendations for
        technologies, suggestions for my apps, or are someone who's hiring for
        an engineering or developer position, let's have a chat!
      </p>
    </div>
  );
};

export default About;
