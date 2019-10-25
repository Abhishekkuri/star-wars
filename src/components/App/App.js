import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello Star wars</h1>
    </div>
  );
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
