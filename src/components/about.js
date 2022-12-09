import React from "react";
import Avatar from "../assets/images/avatar.png";
import "../App.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <div className="row abstract-back ">
                  <img className="avatar" src={Avatar} />
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <p className="p-about">
                    Web developer with experience in making and maintaining
                    powerful and user friendly web designs. I have completed a
                    full stack web development bootcamp certificate program from
                    the University of Kansas. With this program I developed
                    skills and experience with technologies such as HTML, CSS,
                    and Javascript, as well as database frameworks MySQL and
                    MongoDb. I also have gained skills with modern application
                    of Javascript with React.js. I’m very passionate about
                    problem-solving and making web apps that make life easier
                    and are also pleasant and easy to use. I have completed
                    several projects, working with many other learning
                    developers using these skills to make functional web apps.
                    I’m hoping to use my new found skills and experience and
                    apply them to real world problems and be a part of creating
                    apps that are powerful and serve their purpose, but also
                    apps that people want to use for their ease of use and
                    simple design.
                  </p>
                </div>
                <div className="modal-footer" />
                <p>
                  <img
                    src="https://img.icons8.com/material-rounded/24/null/mail-account.png"
                    alt=""
                  />
                  thisisanemailaddressthatis@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
