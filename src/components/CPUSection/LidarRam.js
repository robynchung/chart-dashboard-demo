import { ContactSupportOutlined } from "@material-ui/icons";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function LidarRam({ total, available }) {
  console.log(total, available);
  return (
    <div className="component-lidar-ram-content">
      <div className="component-lidar-ram-bar-container"></div>
      <div className="component-lidar-ram-num">
        <span>
          <span className="component-lidar-ram-num-title">Available:</span> {available}
        </span>
        <span>
          <span className="component-lidar-ram-num-title">Total:</span> {total}
        </span>
      </div>
    </div>
  );
}
