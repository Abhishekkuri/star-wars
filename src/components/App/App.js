import React from "react";
import ReactDOM from "react-dom";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="body">
      <Main />
    </div>
  );
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
