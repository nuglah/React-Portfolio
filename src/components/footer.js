import React from "react";
import Github from "../assets/images/github.png";
import "../footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="img-link">
        <a href="https://github.com/nuglah" target="_blank">
          <img src={Github} alt="Github" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-green-36a157237/"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
