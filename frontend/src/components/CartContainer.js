import React, { useEffect, useState } from "react";
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

import EmtyCart from "../img/emptyCart.svg";
import CartItems from "./CartItems.js";

const CartContainer = () => {
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [total, setTotal] = useState();
  const [flag, setFlag] = useState(1);
  // Sum Total
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);

  useEffect(() => {
    console.log("calls");
    console.log(cartItems);
    // console.log(cartItems[0]?.qty);
    setTotal(
      cartItems.reduce(
        (acc, curr) => acc + Number(curr.qty) * Number(curr.price),
        0
      )
    );
  }, [cartItems, flag]);
  useEffect(() => {
    console.log("calls");

    setDeliveryCharge(Math.trunc((total / 100) * 5));
  }, [total]);
  useEffect(() => {
    setSumTotal(total + deliveryCharge);
  }, [total, deliveryCharge]);

  const showCart = () => {
    console.log("click");
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
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
          onClick={clearCart}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100  cursor-pointer text-textColor text-base"
        >
          Clear <MdRefresh />
        </motion.p>
      </div>
      {/* Bottom Section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[20px] flex flex-col">
          {/* Cart items Section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* Cart Items */}
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <CartItems
                    key={item.id}
                    item={item}
                    flag={flag}
                    setFlag={setFlag}
                  />
                );
              })}
          </div>

          {/* Cart Total Section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-100 text-lg">Sub Total</p>
              <p className="text-gray-100 text-lg">{total}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-100 text-lg">Delivery</p>
              <p className="text-gray-100 text-lg">{deliveryCharge}</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font font-semibold">Total</p>
              <p className="text-gray-200 text-xl font font-semibold">
                Rs {sumTotal}
              </p>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="bg-gradient-to-tr from-orange-400 to-orange-600 w-full p-2 rounded-full text-gray-500 text-lg my-2 hover:shadow-lg   duration-100 ease-out"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="bg-gradient-to-tr from-orange-400 to-orange-600 w-full p-2 rounded-full text-gray-500 text-lg my-2 hover:shadow-lg   duration-100 ease-out"
              >
                Login to Check
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-ful;l h-full flex flex-col items-center justify-center gap-6">
          <img src={EmtyCart} alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
