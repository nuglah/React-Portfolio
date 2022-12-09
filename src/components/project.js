import React from "react";
import Github from "../assets/images/github.png";
import Deploy from "../assets/images/deploy.png";
import "../App.css";
import "../portfolio.css";

function ProjectCards(props) {
  return (
    // <div className={`grid-item gallery__item--${props.id}`}>
    //   <img src={props.image} alt={props.name} className="gallery__img" />
    //   <div className="desc">
    //     <h5>{props.name}</h5>
    //   </div>

    //   <div className="dep-links">
    //     <a href={props.github} target="_blank">
    //       <img src={Github} alt="Repository" id="project-icon" />
    //     </a>
    //     <a href={props.deploy} target="_blank">
    //       <img src={Deploy} alt="Deployed Site" id="project-icon" />
    //     </a>
    //   </div>
    // </div>

    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <h5>{props.name}</h5>
                <img
                  src={props.image}
                  alt={props.name}
                  className="row abstract-back"
                />
              </div>

              <div className="card-body">
                <div className="row">
                  <p className="p-about">{props.description}</p>
                  <p className="p-about">{props.technical}</p>
                </div>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectCards;
