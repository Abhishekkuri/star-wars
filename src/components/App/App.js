import React from "react";
import Main from "../Main/Main";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * App Component to isolate the Index.js and the custom application code
 */
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
