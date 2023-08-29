import React from "react";
import introImage from "../../assets/introImage.png";
import "./intro.scss";

export default function Intro() {
  return (
    <>
      <div className="introContanier">
        <div>
          <p className="introTitle">Welcome to my portfolio website</p>
          <p className="introHeading">Hey folks, I'm Ranvir Singh</p>
          <p className="introAbout">
            A passionate Data Science and ML student, and also have some
            experience in Software Engineering. I’m currently working as a
            Research Assistant at Indiana University
          </p>

          <div className="introButtonContainer">
            <button className="introButton download">Download Resume</button>
            <button className="introButton blog">Go to my blog</button>
          </div>
        </div>
        <div>
          <img className="introImage" src={introImage} alt="" />
        </div>
      </div>
    </>
  );
}
