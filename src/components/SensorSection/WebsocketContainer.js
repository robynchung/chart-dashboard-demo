import React from "react";
import RoundBox from "../RoundBox";
import SensorItem from "./SensorItem";

export default function WebsocketContainer() {
  return (
    <div>
      <h2>Sensor</h2>
      <RoundBox>
        <div className="component-sensor-container">
          <SensorItem title="Motor RPM" num={17} />
          <SensorItem title="Output" num={2.5} />
        </div>
      </RoundBox>
    </div>
  );
}
