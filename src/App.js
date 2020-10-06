import React from "react";
import Menu from "./components/Menu/Menu";
import LineChart from "./components/LineChartSection/LineChartContainer";

function App() {
  return (
    <div className="container">
      <Menu />
      <div className="section-container">
        <LineChart />
      </div>
    </div>
  );
}

export default App;
