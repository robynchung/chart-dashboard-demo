import React, { useEffect, useState } from "react";

import Menu from "./components/Menu/Menu";
import LineChart from "./components/ChartSection/ChartContainer";
import CPU from "./components/CPUSection/WebsocketContainer";
import Sensor from "./components/SensorSection/WebsocketContainer";
import useWebsoocket from "./hooks/useWebsocket";
import useChartData from "./hooks/useChartData";

function App() {
  // const wsMessage = useWebsoocket();

  // console.log(wsMessage);
  //   lidar:
  // cpu: {1: 84, 2: 75}
  // memory: {total: 16384, available: 13265}
  // __proto__: Object
  // sensor:
  // motor_rpm: 17
  // output: 2.5
  // uuid: "test"

  return (
    <div className="container">
      <Menu />
      <div className="section-container">
        <LineChart />
        <div className="section-sub-container">
          <CPU />

          <Sensor />
        </div>
      </div>
    </div>
  );
}

export default App;
