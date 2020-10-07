import React from "react";
import RoundBox from "../RoundBox";
import LidarCpu from "./LidarCpu";
import LidarRam from "./LidarRam";

export default function WebsocketContainer() {
  return (
    <div>
      <h2>Lidar</h2>
      <RoundBox>
        <div className="component-lidar-container">
          <div className="component-liar-cpu-item">
            <LidarCpu bgColor="#3245D1" cpu={1} num={84} />
            <LidarCpu bgColor="#29CEFD" cpu={2} num={75} />
          </div>
          <div className="component-lidar-ram-container">
            <LidarRam total={16384} available={13265} />
          </div>
        </div>
      </RoundBox>
    </div>
  );
}
