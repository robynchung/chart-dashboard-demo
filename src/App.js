import React, { useEffect, useState } from "react";

import Menu from "./components/Menu/Menu";
import LineChart from "./components/ChartSection/ChartContainer";
import Lidar from "./components/CPUSection/WebsocketContainer";
import Sensor from "./components/SensorSection/WebsocketContainer";
import useWebsoocket from "./hooks/useWebsocket";

function App() {
  const wsMessage = useWebsoocket();

  return (
    <div className="container">
      <Menu />
      <div className="section-container">
        <LineChart />
        <div className="section-sub-container">
          <Lidar lidar={wsMessage?.lidar} />

          <Sensor sensor={wsMessage?.sensor} />
        </div>
      </div>
    </div>
  );
}

export default App;
