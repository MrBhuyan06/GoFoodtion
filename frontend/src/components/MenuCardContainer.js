import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/constant.js";
import RowContainer from "./RowContainer.js";
import { useStateValue } from "../context/StateProvider.js";
const MenuCardContainer = () => {
  const [filters, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();
  console.log(foodItems);

  return (
    <section className="w-full my-6 id menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl text-headingColor font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-10 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll py-6 scrollbar-none bg-gradient-to-tr rounded-lg from-red-100 to-red-400 ">
          {categories &&
            categories.map((item) => {
              return (
                <div
                  onClick={() => {
                    setFilter(item.urlParamName);
                  }}
                  key={item.id}
                  className={`group ${
                    filters === item.urlParamName ? "scale-125 " : " bg-card"
                  } bg-gradient-to-tr from-orange-400 to-orange-600  hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-400 cursor-pointer w-24 h-24 rounded-full min-w-[94px  shadow-lg  drop-shadow-lg flex flex-col gap-2 items-center justify-center duration-150 transition-all ease-in`}
                >
                  <div className="w-10 h-10 rounded-full bg-red-600 group-hover:bg-card flex items-center justify-center">
                    <IoFastFood className="text-textColor text-2xl" />
                  </div>
                  <p className="text-md text-textColor group-hover:text-card font-semibold cursor-none">
                    {item.name}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="w-full bg-gradient-to-tr rounded-lg from-orange-200 to-orange-600 h-screen  mt-5">
          {!foodItems ? (
            <h1>Loading</h1>
          ) : (
            <RowContainer
              flag={false}
              data={foodItems?.filter((n) => n.category === filters)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuCardContainer;
