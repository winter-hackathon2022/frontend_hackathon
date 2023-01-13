import React, { useEffect } from "react";
import LineChart from "./component/LineChart"
import LineChart1 from "./component/LineChart1"
import './App.css'
import Toggle from "./component/Toggle";
import { useState, useRef } from "react";

function App() {
  const [on, setOn] = useState(false);
  const m = useRef();
  useEffect(() => { 
    m.current.style = on === true ? "background-color: #ffad41" : "background-color: white"
  }, [on])
  return (
    <div className="App">
      <div id="memo">
        <div className="m" ref={m}>
          <img src={on ? "./img/onlight.png" :"./img/offlight.png" }></img>
          <Toggle on={on} setOn={setOn}
          ></Toggle>
          {on ? <p id="onLight">Light</p> : <p id="offLight">Light</p>}
        </div>
        <div className="m">
          <img src="./img/offlight.png"></img>
          <Toggle />
          <p>Light</p>
        </div>
        <div className="m">
          <img src="./img/offlight.png"></img>
          <Toggle></Toggle>
          <p>Light</p>
        </div>
        <div className="m">
          <img src="./img/offlight.png"></img>
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
