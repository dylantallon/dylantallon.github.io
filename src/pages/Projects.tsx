import React from "react";
import "./projects.css";

import Project from "../components/Project";

const projectArray: JSX.Element[] = [
  <div>
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
      This game was created in a team of 4, and tasks were delegated evenly. My
      responsibilities included programming and shaping the terrain. This year's 
      prompt was simply to create an adventure game, so our team eventually 
      settled on the idea of a space adventure. The intro cutscene explains the 
      story: you are trapped on an alien planet after your spaceship crash lands 
      and have to find all the parts scattered across the planet to repair it 
      and go back home.
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
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/gS4-dzurwyQ"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className="projectText">
      This C++ text-based application was created in a team of 3 people as a final 
      project for the Data Structures & Algorithms class.
    </p>
    <h3 className="projectSubtitle">The Problem</h3>
    <p className="projectText">
      There are hundreds of thousands of Super Mario Maker players, but the 
      original game on the Wii U does not have sufficient built-in functionality 
      to easily sort all of the players based on characteristics such as number of 
      plays, number of world records, and number of likes. Although the game has 
      ample functionality for finding and filtering levels based on popularity or 
      difficulty, it is not possible to sort through players and see their stats. 
      Such functionality was once present through an online website, but it has 
      since been shut down.
    </p>
    <p className="projectText">
      This project allows users to see which players were the most active or had 
      the highest standings. If theoretically implemented with live data, this 
      would further encourage all players to do certain actions as they seek a 
      position in the game’s leaderboards.
    </p>
    <h3 className="projectSubtitle">Features</h3>
    <p className="projectText">
      The main feature of this application is sorting players present in the 
      database. Users can choose which category they want to sort by, which 
      sorting algorithm to use, and what subset of results to display. A secondary 
      feature is searching for a specific player by name and displaying all their 
      corresponding stats in one place.
    </p>
  </div>,
  <div>
    <h3 className="projectSubtitle">Demo Video</h3>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PJ9xQy0a4SA"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <h3 className="projectSubtitle">Description</h3>
    <p className="projectText">
      This website was created using Angular for a semester-long project in my
      Software Engineering class. I worked with one other person on the front-end of
      the app.
    </p>
    <p className="projectText">
      This application enables users to search grocery store products using the 
      Open Food Facts API, quickly view ingredients they may be personally allergic 
      to in each product, and add desired items to their favorites or to personalized 
      shopping lists.
    </p>
  </div>,
  <div>
    <p className="projectText">
      I competed with a team of 4 in the 2023 
      <a 
        className="projectLink"
        href="https://gatortped.wixsite.com/home/swampthrills" 
        target="_blank" 
        rel="noreferrer">
          Swamp Thrills design competition
      </a>
      hosted by Gator Theme Park Engineering & Design at UF. Our team decided to 
      design a tracked dark ride to fit the given prompt, and I was responsible for 
      creating a site layout for the attraction as well as a 3D model of the ride vehicle.
    </p>
    <h3 className="projectSubtitle">Model</h3>
    <div className="imageSideBySide">
      <img
        src="/images/swampthrills model1.png"
        alt="3D model of ride vehicle"
      />
      <img
        src="/images/swampthrills model2.png"
        alt="3D model of ride vehicle"
      />
    </div>
    <img
      className="singleImage"
      src="/images/swampthrills schematics.png"
      alt="Schematics of ride vehicle model"
    />
    <p className="projectText">
      This ride vehicle seats 2 rows of 4 people. Each seat is intended to be secured 
      by a seatbelt, and in front of each seat is a screen and a space for a shooter 
      to be attached, allowing riders to score points on the ride. The vehicle also 
      sits atop what is meant to be a motion base. This model was made using Onshape.
    </p>
    <h3 className="projectSubtitle">Site Layout</h3>
    <img
      className="singleImage"
      src="/images/swampthrills layout.png"
      alt="2D layout of dark ride"
    />
  </div>
];

const Projects = () => {
  return (
    <div>
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div className="projectGrid">
        <Project
          body={projectArray[0]}
          shortTitle="TSA Video Game Design - Olympics Game"
          longTitle="TSA Video Game Design - Olympics Game"
          dates="September 2019 - February 2020"
          technologies="Unity, C#"
        />
        <Project
          body={projectArray[1]}
          shortTitle="TSA Video Game Design - Adventure Game"
          longTitle="TSA Video Game Design - Adventure Game"
          dates="September 2020 - February 2021"
          technologies="Unity, C#"
        />
        <Project
          body={projectArray[2]}
          shortTitle="Engineering Design & Development - SMART Mask"
          longTitle="Engineering Design & Development - SMART Mask"
          dates="September 2020 - May 2021"
          technologies="Arduino, MIT App Inventor"
        />
        <Project
          body={projectArray[3]}
          shortTitle="Data Structures Final Project - SMM Player Leaderboard"
          longTitle="Data Structures Final Project - Super Mario Maker Player Leaderboard"
          dates="November 2022 - December 2022"
          technologies="C++"
        />
        <Project
          body={projectArray[4]}
          shortTitle="SWE Class Project - Grocery Scanner Website"
          longTitle="Software Engineering Class Project - Grocery Scanner Website"
          dates="January 2023 - April 2023"
          technologies="TypeScript, Angular"
        />
        <Project
          body={projectArray[5]}
          shortTitle="Swamp Thrills Ride Design Competition"
          longTitle="Swamp Thrills Ride Design Competition"
          dates="January 2023 - April 2023"
          technologies="CAD software"
        />
      </div>
    </div>
  );
};

export default Projects;
