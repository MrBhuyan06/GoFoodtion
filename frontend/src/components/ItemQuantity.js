import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addItem, removeItem } from "../utils/cartSlice.js";
const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (data) => {
    dispatch(removeItem(data.id));
  };
  return (
    <div className="flex border px-2 border-gray w-24 justify-around items-center">
      <motion.button
        whileTap={{ scale: 0.75 }}
        // onClick={() => {
        //   dispatch(removeItem(item.id));
        // }}
        className="text-2xl w-6 h-6 flex items-center justify-center rounded-full bg-orange-500"
        onClick={() => {
          handleRemoveItem(item);
        }}
      >
        -
      </motion.button>
      <p className="text-white text-xl">{item.quantity}</p>
      <motion.button
        whileTap={{ scale: 0.75 }}
        className="text-2xl w-6 h-6  flex items-center justify-center rounded-full bg-orange-500"
        onClick={() => {
          handleAddItem(item);
        }}
      >
        +
      </motion.button>
    </div>
  );
};

export default ItemQuantity;
