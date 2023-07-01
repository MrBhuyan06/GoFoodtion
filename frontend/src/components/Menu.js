import React from "react";
import { MenuContainer } from "./MenuContainer.js";
import { Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div className="text-blue-800 mt-28">
      <Outlet />
    </div>
  );
};

export default Menu;
