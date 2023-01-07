import React from "react";
import "./projects.css";

import Project from "../components/Project";

const projectArray: JSX.Element[] = [
  <div>
    <h1 id="projectTitle">TSA Video Game Design - Olympics Game</h1>
    <h2 className="projectDates">September 2019 - February 2020</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/n5oJT0fUDGc"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className="projectText">
      This game was created during my junior year of high school for the 2020
      Technology Student Association competition where it won 1st place at the
      Florida state conference. It is a 2D game centered on an Olympic-like
      sporting event and was developed using Unity.
    </p>
    <p className="projectText">
      This game was developed in a team of 2, with my teammate focusing on the
      pixel art graphics while I worked on the programming. The prompt for this
      year's video game design competition was to create a game centered around
      the then-upcoming Tokyo 2020 Olympics. We were not allowed to mention
      "Olympics," however, so we came up with the premise of the generic
      "Genikos Games." Since we were additionally told to focus our game on a
      single Olympic event, we chose the triathlon so that we could essentially
      make 3 minigames in one: swimming, cycling, and running.
    </p>
    <p className="projectText">
      The basic story of the game follows an athlete (who can be customized by
      the player) who is training to compete in the triathlon. The player must
      first train in all 3 sections of the triathlon before competing in the
      actual competition against other computer players. Instructions on how to
      play are displayed per game along with educational facts during loading
      screens. Different endings can be obtained depending on how well the
      player performs.
    </p>
  </div>,
  <div>
    <h1 id="projectTitle">TSA Video Game Design - Adventure Game</h1>
    <h2 className="projectDates">September 2020 - February 2021</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/p8n-K4dKu5k"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className="projectText">
      This game was created during my senior year of high school for the 2021
      Technology Student Association competition where it won 4th place at the
      Florida state conference. It is a 3D adventure/horror game set in space
      and developed using Unity.
    </p>
    <p className="projectText">
      This game was created in a team of 4, and responsibilities were delegated
      evenly across areas including 3D modeling, pixel art, environment, and
      programming. This year's prompt was simply to create an adventure game, so
      our team eventually settled on the idea of a space adventure. The intro
      cutscene explains the story: you are trapped on an alien planet after your
      spaceship crash lands and have to find all the parts scattered across the
      planet to repair it and go back home.
    </p>
    <p className="projectText">
      The planet is a 3D open world space that the player must explore to find
      all the parts. A minimap in the bottom right corner of the UI shows red
      dots where the player must head to. Players can run and jump, but running
      drains a sprint meter. They are also equipped with a flashlight since the
      planet is shrouded in darkness. The primary threats to the player are
      spider-like alien creatures that freely roam the planet. Getting caught by
      one of these will restart the player to the center where they started.
      Combined with the eerie background noise, this adds an element of
      horror/suspense to the game.
    </p>
    <p className="projectText">
      Once a part is found, the player must complete a minigame to collect. Each
      of the 4 minigames is meant to be educational or stimulating in some way
      (e.g. completing simple math equations to restart the ship's auto-pilot
      system). After all parts are collected, the player must assemble them into
      the correct formation before finally taking off.
    </p>
  </div>,
  <div>
    <h1 id="projectTitle">Engineering Design & Development - SMART Mask</h1>
    <h2 className="projectDates">September 2020 - May 2021</h2>
    <p className="projectText">
      This project was created in a team of 2 for a senior capstone engineering
      design course taken in high school. We came up with a product to help
      solve the issues of contract tracing brought about by the COVID-19
      pandemic, that being a face mask with integrated smart features.
    </p>
    <h3 className="projectSubtitle">The Mask</h3>
    <div className="imageSideBySide">
      <img
        src="/images/SmartMask1.jpg"
        alt="Black face mask with small red LED light"
      />
      <img
        src="/images/SmartMask2.jpg"
        alt="Casing for Arduino located inside the mask"
      />
    </div>
    <p className="projectText">
      The "SMART Mask" is an embedded system made by inserting an Arduino Nano
      BLE into a cloth-based face mask. The Arduino is connected to a board that
      powers a red LED which is visible through a hole in the mask. This
      Arduino-LED circuit is additionally encased in a 3D-printed box to prevent
      parts from moving inside of the mask.
    </p>
    <p className="projectText">
      The SMART Mask works by keeping track of any other SMART Masks that come
      into its range and taking the appropriate actions. Distance is
      approximated by the Arduino using Bluetooth signal strength. If the mask
      detects that another mask is within approximately 6 feet, the LED will
      turn on to provide a visual aid that can help with social distancing.
      Also, the Arduino will keep a log of any contacts it traces, and this data
      can be used in conjunction with the mobile app.
    </p>
    <h3 className="projectSubtitle">The App</h3>
    <video width="100%" controls>
      <source src="images/SmartMask3.mp4" type="video/mp4" />
    </video>
    <p className="projectText">
      Our team also developed an Android app that works with the SMART Mask. The
      above video provides a demonstration of its functionality. First, the user
      logs into their account. User accounts are hosted on a Firebase database.
      From there, the home screen provides several options. Tapping on "Your
      Mask" allows the user to sync their SMART Mask to the app through
      Bluetooth, allowing for the stored contacts on the Arduino to be sent to
      the app.
    </p>
    <p className="projectText">
      Next, the user can tap on "Activity" to get insights on their data. The
      log displays all unique contacts by their date, identifier, and location.
      The trends tab groups the contacts by location and assigns an index based
      on predicted risk level. Lastly, users can report as having tested
      positive or coming into contact with COVID. This information is sent to
      the Firebase. When the app is opened, it checks the database for any
      reported cases. If a match between the database and the user's traced
      contacts is found, they are alerted that they may have come into contact
      with COVID. For the purposes of this demo, one smartphone was made to act
      as two different users.
    </p>
    <p className="projectText">
      Lastly, the "Community Trends" tab displays embedded views of various
      COVID trackers to give the user a one-stop hub for staying up to the date
      with the latest news concerning the spread of cases.
    </p>
  </div>,
  <div>
    <h1 id="projectTitle">Data Structures Final Project - Super Mario Maker Player Leaderboard</h1>
    <h2 className="projectDates">November 2022 - December 2022</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/gS4-dzurwyQ"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className="projectText">
      This C++ text-based application was created in a team of 3 people as a final project for the Data Structures & Algorithms class.
    </p>
    <h3 className="projectSubtitle">The Problem</h3>
    <p className="projectText">
      There are hundreds of thousands of Super Mario Maker players, but the original game on the Wii U does not have sufficient built-in functionality to easily sort all of the players based on characteristics such as number of plays, number of world records, and number of likes. Although the game has ample functionality for finding and filtering levels based on popularity or difficulty, it is not possible to sort through players and see their stats. Such functionality was once present through an online website, but it has since been shut down.
    </p>
    <p className="projectText">
      This project allows users to see which players were the most active or had the highest standings. If theoretically implemented with live data, this would further encourage all players to do certain actions as they seek a position in the game’s leaderboards.
    </p>
    <h3 className="projectSubtitle">Features</h3>
    <p className="projectText">
      The main feature of this application is sorting players present in the database. Users can choose which category they want to sort by, which sorting algorithm to use, and what subset of results to display. A secondary feature is searching for a specific player by name and displaying all their corresponding stats in one place.
    </p>
  </div>,
];

const Projects = () => {
  return (
    <div>
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div className="projectGrid">
        <Project
          item={projectArray[0]}
          title="TSA Video Game Design - Olympics Game"
          preview="/images/"
        />
        <Project
          item={projectArray[1]}
          title="TSA Video Game Design - Adventure Game"
          preview="/images/"
        />
        <Project
          item={projectArray[2]}
          title="Engineering Design & Development - SMART Mask"
          preview="/images/"
        />
        <Project
          item={projectArray[3]}
          title="Data Structures Final Project - SMM Player Leaderboard"
          preview="/images/"
        />
      </div>
    </div>
  );
};

export default Projects;
