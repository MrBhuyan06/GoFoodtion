import React from "react";
import RestaurentNestedItemCategory from "./RestaurentNestedItemCategory.js";
import RestaurentItemCategories from "./RestaurentItemCategories.js";
const RestaurentDetailsMain = ({ menu }) => {
  console.log(menu);
  return (
    <div className=" w-full  min-h-[450px]   bg-primary s mx-auto border-6 flex gap-2">
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
      <div className="right basis-[30%]"></div>
    </div>
  );
};

export default RestaurentDetailsMain;
