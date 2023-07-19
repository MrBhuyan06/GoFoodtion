import React, { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useStateValue } from "../context/StateProvider.js";
import { motion } from "framer-motion";
import { actionType } from "../context/reducers.js";
let items = [];
const CartItems = ({ item, flag, setFlag }) => {
  const [qty, setQty] = useState(item.qty);
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);

        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };
  useEffect(() => {
    items = cartItems;
  }, [items, qty]);
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
          {item.price * qty}
        </p>
      </div>
      {/* btn */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          {/* <MdPlue /> */}

          <AiFillMinusCircle
            className="text-orange-400 text-xl"
            onClick={() => updateQty("remove", item.id)}
          />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-100 flex items-center justify-center">
          {qty}
        </p>
        <motion.div whileTap={{ scale: 0.75 }}>
          {/* <MdMinus /> */}
          <AiFillPlusCircle
            className=" text-orange-400 text-xl"
            onClick={() => updateQty("add", item.id)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItems;
