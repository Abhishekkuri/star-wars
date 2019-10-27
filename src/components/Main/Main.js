import React, { Component } from "react";
import Search from "../Search/Search";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <br />
        <Search />
        <br />
        <Footer />
      </>
    );
  }
}

export default Main;
