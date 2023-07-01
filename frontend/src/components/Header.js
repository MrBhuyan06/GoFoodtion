import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../img/logo-1.png";
import userprofile from "../img/avatar.png";
import { motion } from "framer-motion";
import { MdShoppingCartCheckout } from "react-icons/md";

const Header = () => {
  return (
    <div className=" fixed top-0 right-0  z-50 w-screen bg-primary  p-6 px-16    ">
      {/* Desktop and tablet */}
      <header className="hidden md:flex w-full h-full items-center justify-between  ">
        <Link to={"/"} className=" flex items-center gap-2">
          <img src={LOGO} alt="log0" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Go Foodition</p>
        </Link>
        <div className="flex  gap-8 items-center">
          <ul className="flex  gap-8 items-center   ">
            <Link
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              to="/"
            >
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About us
              </li>
            </Link>
            <Link to="/menu">
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
            </Link>
            <Link to="/carts" className="">
              <li className="text-base flex items-center text-textColor  relative">
                <MdShoppingCartCheckout className="text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer relative" />
                <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center  absolute -top-3 left-4">
                  <p className="text-xs text-white font-semibold r">2</p>
                </div>
              </li>
            </Link>
          </ul>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={userprofile}
            className="w-10 min-w-[40px] min-h-40px drop-shadow-xl cursor-pointer"
            alt="userprofile"
          />
        </div>
      </header>

      {/* Mobile */}
      <div className="flex  md:hidden w-full h-full "></div>
    </div>
  );
};

export default Header;
