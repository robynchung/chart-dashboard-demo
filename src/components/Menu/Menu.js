import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import MenuItem from "./MenuItem";

const menuOptions = [
  {
    icon: AiOutlineHome,
    description: "menu1"
  },
  {
    icon: AiOutlineHome,
    description: "menu1"
  },
  {
    icon: AiOutlineHome,
    description: "menu1"
  },
  {
    icon: AiOutlineHome,
    description: "menu1"
  },
  {
    icon: AiOutlineHome,
    description: "menu1"
  }
];

export default function Menu() {
  const [numMenu, setActiveMenu] = useState();

  return (
    <ul className="component-menu-container">
      <li>Blue City</li>

      {menuOptions.map((menu, key) => {
        const { icon, description } = menu;

        return <MenuItem key={key} icon={icon} description={description} isActive={numMenu === key} onClick={() => setActiveMenu(key)} />;
      })}
    </ul>
  );
}
