import React from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  return (
    <div className="App">
      <Display />
      <Keypad />
    </div>
  );
}

export default App;
