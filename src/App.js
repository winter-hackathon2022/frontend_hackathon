import React from "react";
import LineChart from "./component/LineChart"
import LineChart1 from "./component/LineChart1"
import './App.css'
import Toggle from "./component/Toggle";

function App() {
  return (
    <div className="App">
      <div id="memo">
        <div className="m">
          <img src="./img/lightbulb.png"></img>
          <Toggle></Toggle>
          <p>Light</p>
        </div>
        <div className="m">
          <img src="./img/lightbulb.png"></img>
          <Toggle></Toggle>
          <p>Light</p>
        </div>
        <div className="m">
          <img src="./img/lightbulb.png"></img>
          <Toggle></Toggle>
          <p>Light</p>
        </div>
        <div className="m">
          <img src="./img/lightbulb.png"></img>
          <Toggle></Toggle>
          <p>Light</p>
        </div>
      </div>
      <div id="charts">
        <LineChart />
        <LineChart1 />
      </div>
    </div>
  );
}

export default App;
