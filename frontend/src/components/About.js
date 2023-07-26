import React from "react";
import { useStateValue } from "../context/StateProvider.js";
import Delivery from "../img/delivery.png";
import LOGO from "../img/logo-1.png";
import CHEF from "../img/cheff.png";
import { Link } from "react-router-dom";

const About = () => {
  console.log(useStateValue());
  return (
    <div className="text-blue-800 p-4 mt-28  ">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ]">
        <div className=" p-4  gap-6 flex-1 flex flex-col items-start  justify-center">
          <div className="flex items-center gap-2 rounded-full px-2 py-1 justify-start bg-orange-100 text-headingColor">
            <p className="text-base text-orange-500 font-semibold">
              GoFoodtion
            </p>
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <img
                className="w-full h-full object-contain"
                src={LOGO}
                alt="delivery"
              />
            </div>
          </div>
          <p className="text-[2.5rem] lg:text-[4rem] text-headingColor font-bold tracking-wide">
            Welcome to GoFoodtion{" "}
            <span className="text-orange-600 text-[2rem] lg:text-[3rem]">
              where Flavor Meets Passion!
            </span>
          </p>
          <p className="text-base text-textColor lg:w-[80%] text-center md:text-left">
            A gastronomic haven where passion for flavors meets culinary
            artistry. Indulge in our exquisite dishes, thoughtfully crafted with
            love and creativity. Join us for a remarkable dining experience that
            will leave your taste buds enchanted and your heart content."
          </p>
          <Link to="/menu">
            <button
              type="button"
              className="bg-gradient-to-br  text-headingColor text-lg from-orange-400 t0 bg-orange-500  w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Order Now
            </button>
          </Link>
        </div>
        <div className="p-4     grid grid-cols-3 gap-2 ">
          <img src={CHEF} className="ml-40 mt-10" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
