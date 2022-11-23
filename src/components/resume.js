import React from "react";
import "../App.css";
import "../portfolio.css";

const Resume = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="header">
                <h3>
                  Download Resume:{" "}
                  <a href="https://github.com/nuglah/week20-react-portfolio/blob/main/src/assets/Resume.pdf">
                    Ryan Green
                  </a>
                </h3>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="code">Front-end skills</div>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Back-end skills</div>
                  <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySql</li>
                    <li>Sequlize</li>
                  </ul>
                </div>
              </div>

              <div className="modal-footer" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
