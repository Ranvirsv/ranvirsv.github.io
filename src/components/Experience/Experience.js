import React, { useState } from "react";
import "./Experience.scss";
import SplitPane from "split-pane-react/esm/SplitPane";

export default function Experience() {
  const [splitDirection] = useState("vertical");

  const propSizes = [
    "50%", // Size for the left pane
    "50%", // Size for the right pane
  ];

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      date: "2020-2023",
      description: "Worked as a software engineer at Google.",
    },
    {
      id: 2,
      title: "Web Developer",
      date: "2018-2020",
      description: "Worked as a web developer at Facebook.",
    },
  ];

  const educations = [
    {
      id: 3,
      title: "Bachelor of Science in Computer Science",
      date: "2025",
      description: "Junior at Indiana University, Bloomington.",
    },
  ];

  return (
    <div className="experience-container">
      <SplitPane split={splitDirection} sizes={propSizes}>
        <div>
          {experiences.map((experience) => (
            <p className="experienceTitle" key={experience.id}>
              {experience.title}
            </p>
          ))}
        </div>
        <div>
          {educations.map((education) => (
            <p className="educationTitle" key={education.id}>
              {education.title}
            </p>
          ))}
        </div>
      </SplitPane>
    </div>
  );
}
