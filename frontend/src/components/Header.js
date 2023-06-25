import React from "react";
import { Link } from "react-router-dom";
import Logo from "";

const Header = () => {
  return (
    <div className=" fixed z-50 w-screen  p-6 px-16    ">
      {/* Desktop and tablet */}
      <div className="hidden md:flex w-full h-full ">div</div>

      {/* Mobile */}
      <div className="flex  md:hidden w-full h-full "></div>
    </div>
  );
};

export default Header;
