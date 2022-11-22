import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="main-box">
        <div className="infobox">
          <h1>Dylan Tallon</h1>
          <h2>
            2nd-Year Computer Science Student at the University of Florida
          </h2>
          <h3>Email: dylantallon313@gmail.com</h3>
          <h3>Phone: (305) 397-3966</h3>
          <a
            href="https://drive.google.com/file/d/1jrbEERCHxpaLkOEa0bEB-A8xCEkLkt28/view"
            target="_blank"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
        <img
          className="profile-pic"
          src="images/IMG_0320.jpg"
          alt="Dylan Tallon"
        />
      </div>
    </div>
  );
};

export default Home;
