import React from "react";
import { MdLaptopMac } from "react-icons/md";

export default function LidarCpu({ bgColor, cpu, num }) {
  return (
    <div className="component-lidar-cpu-item-container" style={{ backgroundColor: bgColor }}>
      <div className="component-lidar-cpu-title-icon">
        <MdLaptopMac />
        <h3 style={{ color: "#fff" }}>CPU{cpu}</h3>
      </div>
      <div>
        <span style={{ fontSize: 50, color: "#fff", fontWeight: "bold" }}> {num}</span>
      </div>
    </div>
  );
}

// 29CEFD
// ""
