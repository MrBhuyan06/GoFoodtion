import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
import { useStateValue } from "../context/StateProvider.js";
import FallBackCart from "./FallBackCart.js";
import FallBackAccount from "./FallBackAccount.js";
import ItemQuantity from "./ItemQuantity.js";
import useItemTotal from "../utils/useItemTotal.js";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice.js";
import { isEmptyObject } from "../utils/helper.js";
import { USERS_ADDRESS_LIST } from "../utils/constant.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MdOutlineKeyboardBackspace,
  MdRefresh,
  MdPlue,
  MdMinus,
} from "react-icons/md";
const Carts = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const cartItems = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.cart.deliveryAddress);
  const payment = useSelector((store) => store.cart.paymentMethod);
  const getItemTotal = useItemTotal();
  const dispatchs = useDispatch();
  const [{ user }, dispatch] = useStateValue();
  const handleClearCart = () => {
    dispatchs(clearItem());
  };
  //loginHandler
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
    }
  };
  return Object.values(cartItems).length > 0 ? (
    <div className="flex flex-col md:flex-row    mt-24 mx-6 p-2 md:p-10 justify-between ">
      <div className="  w-full lg:w-[60%] md:w-[60%] xl:w-[60%]">
        <FallBackAccount />
      </div>

      <div className="bg-gradient-to-tr rounded-md  from-orange-400 to-orange-600 drop-shadow-md  flex-2 p-6 w-auto">
        <div className="flex text-white bg-cartItem px-2 rounded-lg  justify-between items-center mb-2">
          <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
          <div className="flex justify-center items-center ">
            <motion.p
              whileTap={{ scale: 0.75 }}
              onClick={handleClearCart}
              className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100  cursor-pointer text-textColor text-base"
            >
              Clear <MdRefresh />
            </motion.p>
          </div>
        </div>
        {Object.values(cartItems).map((item) => {
          return (
            <div className="my-3 bg-cartItem p-4 rounded-md text-white">
              <div className="flex items-center mt-2">
                <p className="px-2 w-48 text-sm">{item.name}</p>
                <div className="px-5">
                  <ItemQuantity item={item} key={item.id} />
                </div>

                <p className="font-thin text-sm">
                  {"₹ " + (item.price / 100) * item.quantity}
                </p>
              </div>
            </div>
          );
        })}

        <div className="border border-black my-2"></div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">To Pay</p>
          <p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
        </div>
        {user && (!isEmptyObject(address) || !isEmptyObject(payment)) && (
          <>
            <div className="border border-black my-2"></div>
            {!isEmptyObject(address) && (
              <div className="flex flex-col bg-cartItem text-white p-2 rounded-md justify-between my-2">
                <h1 className="text-lg mt-2.5 text-title font-bold ">
                  Delivery Address
                </h1>
                <h2 className="font-semibold mt-2.5 text-title text-base">
                  {address.addressType}
                </h2>
                <p className="text-sm text-bio text-ellipsis">
                  {address.addressDescription}
                </p>
              </div>
            )}
            {!isEmptyObject(payment) && (
              <div className="flex bg-cartItem text-white p-2 rounded-md flex-col justify-between mb-2">
                <h1 className="text-lg mt-2.5 text-title font-bold ">
                  Payment
                </h1>
                <h2 className="font-semibold mt-2.5 text-title text-base">
                  {payment.paymentType}
                </h2>
                <p className="text-sm text-bio text-ellipsis">
                  {payment?.paymentMethod}
                </p>
              </div>
            )}
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="flex bg-cartItem text-white rounded-md justify-center my-10"
            >
              <Link to="/payment">
                <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
                  {" "}
                  PROCEED TO PAYMENT
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">
      <div className="card-container w-1/2 mx-auto bg-gradient-to-tr from-orange-400 to-orange-600 rounded">
        <FallBackCart
          text={"Hurry Up Grap Somethink your Bag Is Empty!!!"}
          btnText={"LOOK FOR RESTAURANTS"}
        />
      </div>
    </div>
  );
};

export default Carts;
