import React from "react";
import Main from "../Main/Main";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Router>
        <Main />
      </Router>
    </div>
  );
}
export default App;
