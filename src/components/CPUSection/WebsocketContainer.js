import React from "react";
import RoundBox from "../RoundBox";
import LidarCpu from "./LidarCpu";
import LidarRam from "./LidarRam";

export default function WebsocketContainer({ lidar }) {
  return (
    <div>
      <h2>Lidar</h2>
      <RoundBox>
        <div className="component-lidar-container">
          <div className="component-liar-cpu-item">
            <LidarCpu bgColor="#3245D1" cpu={1} num={lidar?.cpu[`${1}`]} />
            <LidarCpu bgColor="#29CEFD" cpu={2} num={lidar?.cpu[`${2}`]} />
          </div>
          <div className="component-lidar-ram-container">
            <LidarRam total={lidar?.memory?.total} available={lidar?.memory?.available} />
          </div>
        </div>
      </RoundBox>
    </div>
  );
}
