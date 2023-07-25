import React from "react";
import RestaurentNestedItemCategory from "./RestaurentNestedItemCategory.js";
import RestaurentItemCategories from "./RestaurentItemCategories.js";
import { useDispatch, useSelector } from "react-redux";
import ItemQuantity from "./ItemQuantity.js";
import FallBackCart from "./FallBackCart.js";
import { motion } from "framer-motion";
import {
  MdOutlineKeyboardBackspace,
  MdRefresh,
  MdPlue,
  MdMinus,
} from "react-icons/md";
import { clearItem } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";
import useItemTotal from "../utils/useItemTotal.js";
import { MdShoppingCartCheckout, MdAdd, MdLogout } from "react-icons/md";
const RestaurentDetailsMain = ({ menu }) => {
  console.log(menu);
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };
  const getItemTotal = useItemTotal();
  return (
    <div className=" w-full relative   bg-primary  mx-auto border-6 flex gap-2">
      <div className="card-conatiner w-[70%]">
        {menu.map((item, index) => {
          return (
            <div key={index}>
              {item.categories ? (
                <RestaurentNestedItemCategory nestedCategory={item} />
              ) : (
                <RestaurentItemCategories itemCategory={item} />
              )}
            </div>
          );
        })}
      </div>
      <div className=" w-[25%] relative  bg-transparent mt-4 ">
        {Object.values(cartitems).length > 0 ? (
          <div className="w-full rounded-md   bg-cartTotal e shadow-lg p-4 mt-8 h-auto">
            <div className="flex justify-center items-center ">
              <span className="text-xl text-white w-full    ">Cart</span>
              <motion.p
                whileTap={{ scale: 0.75 }}
                onClick={handleClear}
                className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100  cursor-pointer text-textColor text-base"
              >
                Clear <MdRefresh />
              </motion.p>
            </div>
            <p className="text-gray-200 flex items-center gap-2 ">
              {Object.values(cartitems).length} items
              <MdShoppingCartCheckout className="text-orange-500 text-lg" />
            </p>
            {Object.values(cartitems).map((item) => {
              return (
                <div className="flex p-4 border-b rounded-lg border-gray-200  items-center mt-2 justify-between bg-cartItem">
                  <p className="w-40 text-sm text-white">{item.name}</p>
                  <div className="w-30 px-5">
                    <ItemQuantity item={item} key={item.id} />
                  </div>

                  <p className="w-10 text-white font-thin text-sm">
                    {"₹ " + Number(item.price / 100) * Number(item.quantity)}
                  </p>
                </div>
              );
            })}
            <div className="border border-gray my-4"></div>
            <div className="flex justify-between  mt-4">
              <p className="text-lg font-bold text-orange-500 ">Sub Total</p>
              <p className="text-neutral-300 text-lg">
                {"₹ " + getItemTotal()}
              </p>
            </div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="flex justify-center mt-10 bg-gradient-to-tr from-orange-400 to-orange-600 w-full rounded-sm"
            >
              <Link className="" to="/cart">
                {" "}
                <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
                  {" "}
                  CHECKOUT
                </button>
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="card-container w-full bg-gradient-to-tr from-orange-400 to-orange-600 sticky top-0  ">
            <FallBackCart text={"Bhook Laga Hai na Chalo Khalo kus🍗"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurentDetailsMain;
