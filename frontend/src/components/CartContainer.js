import React from "react";
import { useStateValue } from "../context/StateProvider.js";
import { actionType } from "../context/reducers.js";
import {
  MdOutlineKeyboardBackspace,
  MdRefresh,
  MdPlue,
  MdMinus,
} from "react-icons/md";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import { motion } from "framer-motion";

const CartContainer = () => {
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const showCart = () => {
    console.log("click");
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className=" fixed top-0 right-0 w-full md:w-375 h-[100vh] z-[101]   drop-shadow-md flex flex-col bg-white "
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer bg-gradient-to-tr  from-orange-300 to-orange-600">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace
            onClick={showCart}
            className="text-3xl text-textColor "
          />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100  cursor-pointer text-textColor text-base"
        >
          Clear <MdRefresh />
        </motion.p>
      </div>
      {/* Bottom Section */}
      <div className="w-full h-full bg-cartBg rounded-t-[20px] flex flex-col">
        {/* Cart items Section */}
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* Cart Items */}
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                  <img
                    src={item.imageURL}
                    alt=""
                    className="w-20 h-20  max-w-[60px] rounded-full object-contain "
                  />
                  {/* Name sectionnqd */}
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-100"> {item.tittle}</p>
                    <p className="text-sm black text-gray-300 font-semibold">
                      {item.price}
                    </p>
                  </div>
                  {/* btn */}
                  <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                    <motion.div whileTap={{ scale: 0.75 }}>
                      {/* <MdPlue /> */}

                      <AiFillMinusCircle className="text-orange-400 text-xl" />
                    </motion.div>
                    <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-100 flex items-center justify-center">
                      1
                    </p>
                    <motion.div whileTap={{ scale: 0.75 }}>
                      {/* <MdMinus /> */}
                      <AiFillPlusCircle className=" text-orange-400 text-xl" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Cart Total Section */}
        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-100 text-lg">Sub Total</p>
            <p className="text-gray-100 text-lg">Rs 300</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-100 text-lg">Delivery</p>
            <p className="text-gray-100 text-lg">Rs 300</p>
          </div>
          <div className="w-full border-b border-gray-600 my-2"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font font-semibold">Total</p>
            <p className="text-gray-200 text-xl font font-semibold">Rs 4009</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="bg-gradient-to-tr from-orange-400 to-orange-600 w-full p-2 rounded-full text-gray-500 text-lg my-2 hover:shadow-lg   duration-100 ease-out"
          >
            Check Out
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
