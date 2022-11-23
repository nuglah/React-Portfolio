import React from "react";
import Github from "../assets/images/github.png";
import Deploy from "../assets/images/deploy.png";
import "../App.css";
import "../portfolio.css";

function ProjectCards(props) {
  return (
    <div className={`grid-item gallery__item--${props.id}`}>
      <img src={props.image} alt={props.name} className="gallery__img" />
      <div className="desc">
        <h5>{props.name}</h5>
      </div>

      <div className="dep-links">
        <a href={props.github} target="_blank">
          <img src={Github} alt="Repository" id="project-icon" />
        </a>
        <a href={props.deploy} target="_blank">
          <img src={Deploy} alt="Deployed Site" id="project-icon" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
