import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* footer  */}
      <footer className="footer">
        <nav className="navbar navbar-default navbar-custom">
          <div className="container-fluid">
            <div className="nav navbar-nav navbar-left" />
            <div className="text-center center-block">
              <a href="https://www.facebook.com/abhishek.kuri.7">
                <i
                  id="social-fb"
                  className="fa fa-facebook-square fa-3x social"
                />
              </a>
              <a href="https://twitter.com/twimmercom?lang=en">
                <i
                  id="social-tw"
                  className="fa fa-twitter-square fa-3x social"
                />
              </a>
              <a href="https://en.wikipedia.org/wiki/Star_Wars">
                <i id="social-gp" className="fa fa-wikipedia-w fa-3x social" />
              </a>
              <a href="https://www.outlook.com">
                <i
                  id="social-em"
                  className="fa fa-envelope-square fa-3x social"
                />
              </a>
            </div>
            <div className="nav navbar-nav navbar-right">
              <a href="https://github.com/Abhishekkuri/star-wars">Github</a>
              <a href="https://linkedin.com/in/abhishekkuri">LinkedIn</a>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
