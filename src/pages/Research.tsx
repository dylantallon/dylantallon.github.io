import React from "react";
import "./research.css";

const Research = () => {
  return (
    <div>
      <div className="researchBox">
        <h1 className="researchH1">Research</h1>
        <h2 className="researchH2">
          CURE (Course-Based Undergraduate Research Experience):
        </h2>
        <h3 className="researchH3">
          Anumaan: AI-Ethics Framework for Default Reasoning and Decision Making
          through Crowdsourcing
        </h3>
        <img
          className="researchPoster"
          src="/images/poster.png"
          alt="Research poster"
        />
        <p className="researchText">
          For my Spring 2022 semester, I was involved in a course-based research
          experience alongside 3 other students which was centered on the ethics
          of artificial intelligence, specifically as it pertains to
          self-driving cars. Led by a professor, we performed a qualitative
          analysis of data collected from a student survey regarding the topic
          of AI ethics.
        </p>
        <p className="researchText">
          Project description: "This project aims to study human decision-making
          and its potential to inform algorithmic decisions in AI systems.
          Students will analyze qualitative data collected through
          crowdsourcing. This analysis will be used to create and validate a
          framework on human decisions and reasoning. A mathematical model that
          predicts decisions and can be integrated into automated agents will be
          proposed as the final deliverable."
        </p>
      </div>
    </div>
  );
};

export default Research;
