import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { icons } from "react-icons";
import { motion } from "framer-motion";
const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full items-center flex gap-4 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300  min-w-[300px] md:w-340 md:min-w-[300px] h-auto bg-cardOverlay   border-2 drop-shadow-md rounded-lg p-2  my-12 backdrop:filter flex flex-col items-center justify-center transition-all ease-in-out duration-100  backdrop-blur-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageURL}
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.5 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-4 items-center justify-center">
              <p className="text-textColor font-semibold mt-1 text-base md:text-lg">
                {item.tittle}
                <p className="mt-1 text-sm text-gray-500">
                  {item.calories} Colaries
                </p>
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-600">Rs</span>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
