import React from "react";

export default function MenuItem({ icon: Icon, description, isActive, onClick }) {
  console.log(isActive);
  return (
    <li className="component-menu-child" onClick={onClick}>
      <Icon className="component-menu-icon" />
      <span className={`${isActive && "active"}`}>{description}</span>
    </li>
  );
}
