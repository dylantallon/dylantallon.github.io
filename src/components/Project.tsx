import React from "react";
import { useState } from "react";

type Props = {
  body: JSX.Element,
  shortTitle: string,
  longTitle: string,
  dates: string,
  preview: string
}

const Project = ({ body, shortTitle, longTitle, dates, preview }: Props) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const clickHandler = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div>
      <button className="projectPreview" onClick={clickHandler}>
        <h2>{shortTitle}</h2>
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
        <h1 id="projectTitle">{longTitle}</h1>
        <h2 className="projectDates">{dates}</h2>
        {body}
      </div>
    </div>
  );
};

export default Project;
