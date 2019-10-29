import React from "react";
import "./Footer.css";

/**
 * Footer component to show the Social information about me
 */
const Footer = () => {
  return (
    <>
      {/* footer  */}
      <footer className="footer">
        <div className="text-center center-block">
          <a href="https://www.facebook.com/abhishek.kuri.7">
            <i id="social-fb" className="fa fa-facebook-square fa-3x social" />
          </a>
          <a href="https://twitter.com/twimmercom?lang=en">
            <i id="social-tw" className="fa fa-twitter-square fa-3x social" />
          </a>
          <a href="https://en.wikipedia.org/wiki/Star_Wars">
            <i id="social-gp" className="fa fa-wikipedia-w fa-3x social" />
          </a>
          <a href="https://www.outlook.com">
            <i id="social-em" className="fa fa-envelope-square fa-3x social" />
          </a>
          <a href="https://github.com/Abhishekkuri/star-wars">
            <i id="social-em" className="fa fa-github-square fa-3x social" />
          </a>
          <a href="https://linkedin.com/in/abhishekkuri">
            <i id="social-em" className="fa fa-linkedin-square fa-3x social" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
