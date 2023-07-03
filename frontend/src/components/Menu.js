import React from "react";
import { MenuContainer } from "./MenuContainer.js";
import { Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div className="text-blue-800 px-4 md:px-16 py-4 mt-16 md:mt-24">
      <Outlet />
    </div>
  );
};

export default Menu;
