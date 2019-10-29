import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Main.css";
import Routes from "../Routes/Routes";

class Main extends Component {
  render() {
    return (
      <>
        <div id="page-container">
          <div id="content-wrap">
            <Header />
            <br />
            <Routes />
          </div>
          <footer id="footer">
            <Footer />
          </footer>
        </div>
      </>
    );
  }
}

export default Main;
