import React, { useEffect, useState } from "react";

import Menu from "./components/Menu/Menu";
import LineChart from "./components/ChartSection/ChartContainer";
import Websocket from "./components/WebsocketSection/WebsocketContainer";
import useWebsoocket from "./hooks/useWebsocket";
import useChartData from "./hooks/useChartData";

function App() {
  // const wsMessage = useWebsoocket();

  return (
    <div className="container">
      <Menu />
      <div className="section-container">
        <LineChart />
        <div className="section-sub-container ">
          <Websocket />
          <Websocket />
        </div>
      </div>
    </div>
  );
}

export default App;
