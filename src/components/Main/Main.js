import React, { Component } from "react";
import Search from "../Search/Search";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Main.css";

// class Main extends Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <br />
//         <Search />
//         <br />
//         <Footer className="footer" />
//       </>
//     );
//   }
// }

class Main extends Component {
  render() {
    return (
      <>
        <div id="page-container">
          <div id="content-wrap">
            {/* <!-- all other page content --> */}
            <Header />
            <br />
            <Search />
            {/* <br /> */}
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
