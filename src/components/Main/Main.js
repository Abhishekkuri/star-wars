import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Main.css";

import Routes from "../Routes/Routes";

/**
 * A Wrapper component to integrate the overall structure of application *
 */
class Main extends Component {
  render() {
    return (
      <>
        <div id="page-container">
          {/* A Wrapper to keep the Header and Rest of the body except Footer */}
          <div id="content-wrap">
            <Header />
            <br />
            <Routes />
          </div>
          {/* Footer Component to show the social networks */}
          <footer id="footer">
            <Footer />
          </footer>
        </div>
      </>
    );
  }
}

export default Main;
