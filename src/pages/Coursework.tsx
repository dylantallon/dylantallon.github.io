import React from "react";
import "./coursework.css";

import Collabsible from "../components/Collabsible";

const Coursework = () => {
  return (
    <div>
      <div className="heading">
        <h1>Relevant Coursework</h1>
      </div>
      <div className="collapsibles">
        <Collabsible
          id="1"
          semester="Fall 2021"
          classes={["Calculus 3", "Physics 1", "Research & Creativity"]}
        />
        <Collabsible
          id="2"
          semester="Spring 2022"
          classes={[
            "Programming Fundamentals 2",
            "Discrete Structures",
            "Engineering Ethics",
            "CURE: AI-Ethics Framework",
          ]}
        />
        <Collabsible
          id="3"
          semester="Fall 2022"
          classes={[
            "Data Structures and Algorithms",
            "Computer Organization",
            "Computational Linear Algebra",
          ]}
        />
        <Collabsible
          id="4"
          semester="Spring 2023"
          classes={[
            "Intro to Software Engineering",
            "Programming Language Concepts",
            "Professional Communication for Engineers",
          ]}
        />
      </div>
    </div>
  );
};

export default Coursework;
