import React from "react";
import RoundBox from "../RoundBox";
import SensorItem from "./SensorItem";

export default function WebsocketContainer({ sensor }) {
  return (
    <div>
      <h2>Sensor</h2>
      <RoundBox>
        <div className="component-sensor-container">
          <SensorItem title="Motor RPM" num={sensor?.motor_rpm} />
          <SensorItem title="Output" num={sensor?.output} />
        </div>
      </RoundBox>
    </div>
  );
}
