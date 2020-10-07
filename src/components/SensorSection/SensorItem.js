import React from "react";

export default function SensorItem({ title, num }) {
  return (
    <div className="component-sensor-item-box">
      {title}
      <div className="component-sensor-num-box">{num}</div>
    </div>
  );
}
