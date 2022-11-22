import React from "react";
import { useState } from "react";

const Project = ({ item, title, preview }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const clickHandler = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div>
      <button className="projectPreview" onClick={clickHandler}>
        <h2>{title}</h2>
      </button>
      <div
        className="projectPopupOuter"
        style={
          popupOpen
            ? { opacity: 0.5, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
        onClick={clickHandler}
      ></div>
      <div
        className="projectPopupInner"
        style={
          popupOpen
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        {item}
      </div>
    </div>
  );
};

export default Project;
