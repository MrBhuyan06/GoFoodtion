import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../img/logo-1.png";
import userprofile from "../img/avatar.png";
import { motion } from "framer-motion";
import { MdShoppingCartCheckout, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
import { useStateValue } from "../context/StateProvider.js";
import { actionType } from "../context/reducers.js";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  console.log(user);
  console.log(typeof cartItems);
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      console.log(providerData[0]);
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    console.log("click");
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    console.log("click");
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <div className=" fixed top-0 right-0  z-50 w-screen bg-primary  p-3 px-4 md:p-6 md:px-16    ">
      {/* Desktop and tablet */}
      <header className="hidden md:flex w-full h-full items-center justify-between  ">
        <Link to={"/"} className=" flex items-center gap-2">
          <img src={LOGO} alt="log0" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Go Foodition</p>
        </Link>
        <div>
          <p>
            {user ? (
              <span className="text-lg text-orange-400 font-bold">{`Welcome ${user?.displayName}`}</span>
            ) : (
              <span className="text-lg text-orange-400 font-bold">{`Please Login To your Account`}</span>
            )}
          </p>
          <p className="text-lg text-orange-400 font-bold">
            This project is developed for Educational purpose
          </p>
        </div>
        <div className="flex  gap-8 items-center">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex  gap-8 items-center   "
          >
            <Link
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              to="/"
            >
              <li onClick={() => setIsMenu(false)}>Home</li>
            </Link>
            <Link to="/about">
              <li
                className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                About us
              </li>
            </Link>
            <Link to="/menu">
              <li
                className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                Menu
              </li>
            </Link>

            <li
              className="text-base flex items-center text-textColor  relative"
              onClick={() => setIsMenu(false)}
            >
              <MdShoppingCartCheckout
                className="text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer relative"
                onClick={showCart}
              />
              {cartItems && cartItems.length > 0 && (
                <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center  absolute -top-3 left-4">
                  <p className="text-xs text-white font-semibold r">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </li>
          </motion.ul>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user?.photoURL : userprofile}
              className="w-10 min-w-[40px] min-h-40px drop-shadow-xl rounded-full cursor-pointer"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col  absolute top-12 right-0"
              >
                {user && user.email === "abhisekhbhuyan0606@gmail.com" && (
                  <Link to={"/menu/createitem"}>
                    <p
                      className="px-4 py-2 flex  items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Items <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile */}
      <div className="flex  md:hidden w-full h-full  items-center justify-between">
        <Link to="/cart" className="">
          <div className=" flex items-center text-base px-4 py-2 hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer relative">
            <MdShoppingCartCheckout className="text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer relative" />
            {cartItems && cartItems.length > 0 && (
              <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center  absolute -top-3 left-4">
                <p className="text-xs text-white font-semibold r">2</p>
              </div>
            )}
          </div>
        </Link>
        <Link to={"/"} className=" flex items-center gap-2">
          <img src={LOGO} alt="log0" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Go Foodition</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={userprofile}
            className="w-10 min-w-[40px] min-h-40px drop-shadow-xl cursor-pointer"
            alt="userprofile"
            onClick={login}
          />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col  absolute top-12 right-0"
            >
              {user && user.email === "abhisekhbhuyan0606@gmail.com" && (
                <Link to={"/menu/createitem"}>
                  <p className="px-4 py-2 flex  items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base">
                    New Items <MdAdd />
                  </p>
                </Link>
              )}

              <ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex  flex-col   "
              >
                <Link
                  className="text-base px-4 py-2 hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer"
                  to="/"
                >
                  <li onClick={() => setIsMenu(false)}>Home</li>
                </Link>
                <Link to="/about" onClick={() => setIsMenu(false)}>
                  <li className="text-base px-4 py-2 hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer">
                    About us
                  </li>
                </Link>
                <Link to="/menu">
                  <li
                    className="text-base px-4 py-2 hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    Menu
                  </li>
                </Link>
                <Link to="/carts" className="">
                  <li className=" flex items-center text-base px-4 py-2 hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer relative">
                    <MdShoppingCartCheckout className="text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer relative" />
                    {cartItems && cartItems.length > 0 && (
                      <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center  absolute -top-3 left-4">
                        <p className="text-xs text-white font-semibold r">2</p>
                      </div>
                    )}
                  </li>
                </Link>
              </ul>
              <p
                className="px-4 m-2 p-2 rounded-md shadow-md py-2 flex items-center gap-3 justify-center cursor-pointer bg-gray-200 hover:bg-slate-300 transition-all duration-100 ease-in-out text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
