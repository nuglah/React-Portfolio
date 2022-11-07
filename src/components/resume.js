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
                  Download Resume: <a href="">Ryan Green</a>
                </h3>
              </div>

              <div className="modal-footer" />

              <div className="header">
                <h3>Skills</h3>
              </div>
              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Front-end skills</div>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Back-end skills</div>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="modal-footer" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
