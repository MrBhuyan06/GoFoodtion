import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-red-500">
      <div className=" nav-lists  h-[200px]">
        <ul>
          <Link className="text-blue-400" to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li className="text-blue-400">About</li>
          </Link>
          <Link to="/carts">
            <li className="text-blue-400">Cart</li>
          </Link>
          <Link to="/menu">
            <li className="text-blue-400">Menu</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
