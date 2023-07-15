import React from "react";
import Delivery from "../img/delivery.png";
import Biriyani from "../img/biryani-2.jpg";
import Burger from "../img/burger.jpg";
import chineseone from "../img/china.jpg";
import chinesetwo from "../img/chinnes-2.jpg";
import Pizza from "../img/pizza.jpg";
import sweet from "../img/sweet-2.jpg";
import Tandoori from "../img/tandoori.jpg";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider.js";
import { getAllFoodItems } from "../utils/firebaseFunction.js";
import { actionType } from "../context/reducers.js";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer.js";

const MenuContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ]">
        <div className=" p-4  gap-6 flex-1 flex flex-col items-start  justify-center">
          <div className="flex items-center gap-2 rounded-full px-2 py-1 justify-start bg-orange-100 text-headingColor">
            <p className="text-base text-orange-500 font-semibold">
              Bike Delivery
            </p>
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <img
                className="w-full h-full object-contain"
                src={Delivery}
                alt="delivery"
              />
            </div>
          </div>
          <p className="text-[2.5rem] lg:text-[4rem] text-headingColor font-bold tracking-wide">
            One Step Solution to{" "}
            <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
              Your Hunger
            </span>
          </p>
          <p className="text-base text-textColor lg:w-[80%] text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            fugit est maxime in minima omnis vitae facere dolores voluptas ut
            necessitatibus temporibus, quae quaerat qui error, amet modi fugiat
            alias.'
          </p>
          <button
            type="button"
            className="bg-gradient-to-br  text-headingColor text-lg from-orange-400 t0 bg-orange-500  w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Order Now
          </button>
        </div>
        <div className="p-4 flex-2 grid grid-cols-3 grid-rows-[120px] gap-2  ">
          <div
            className="bg-cover row-2 text-white flex  text-center text-lg rounded-lg justify-center items-center bg-textColor bg-top  transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-500 bg-blend-hard-light hover:bg-center hover:shadow-md "
            style={{
              backgroundImage: `url(${Biriyani})`,
            }}
          >
            Biriyani
          </div>
          <div
            className="bg-cover flex  object-cover rounded-md col-2 text-white text-xl justify-center items-center bg-textColor bg-blend-hard-light  bg-top cursor-pointer hover:bg-gray-500 hover:bg-center hover:shadow-md transition-all duration-1000 ease"
            style={{
              backgroundImage: `url(${Tandoori})`,
            }}
          >
            Tandoori
          </div>
          <div
            className="bg-cover  text-white text-xl  rounded-md flex justify-center items-center bg-black  bg-top cursor-pointer hover:bg-gray-500 bg-blend-hard-light hover:bg-center hover:shadow-md transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${Burger})`,
            }}
          >
            Burger
          </div>
          <div
            className="bg-cover row-2 text-white text-xl rounded-md flex justify-center items-center bg-textColor  bg-top cursor-pointer bg-blend-hard-light hover:bg-gray-500 hover:bg-center hover:shadow-md transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${sweet})`,
            }}
          >
            Sweet
          </div>
          <div
            className="bg-cover col-2 text-white text-xl flex bg-blend-hard-light justify-center items-center bg-textColor rounded-md  bg-top cursor-pointer hover:bg-gray-500 hover:bg-center hover:shadow-md transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${chineseone})`,
            }}
          >
            Chinese
          </div>
          <div
            className="bg-cover  text-white text-xl flex justify-center items-center bg-textColor rounded  bg-top cursor-pointer bg-blend-hard-light hover:bg-gray-500 hover:bg-center hover:shadow-md transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${chinesetwo})`,
            }}
          >
            Noodles
          </div>
          <div
            className="bg-cover col-2 text-white text-xl flex justify-center items-center bg-textColor  bg-top cursor-pointer hover:bg-gray-500 bg-blend-hard-light hover:bg-center hover:shadow-md transition-all duration-1000 ease-linear"
            style={{
              backgroundImage: `url(${Pizza})`,
            }}
          >
            Pizza
          </div>
        </div>
      </section>
      <section className="w-full my-6 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl text-headingColor font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Fresh & Healty Fruits
          </p>
          <div className="hidden  md:flex gap-3 items-center ">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300   hover:bg-orange-500 duration-100 transition-all ease-in-out hover:shadow-lg flex items-center justify-center cursor-pointer"
            >
              <MdChevronLeft className="text-white text-lg" />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300  hover:bg-orange-500 duration-100 transition-all ease-in-out hover:shadow-lg flex items-center justify-center cursor-pointer"
            >
              <MdChevronRight className=" text-white text-lg" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} />
      </section>
    </>
  );
};

export default MenuContainer;
