import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";
import RestaurentItemCategories from "./RestaurentItemCategories.js";

const RestaurentNestedItemCategory = ({ nestedCategory }) => {
  console.log(nestedCategory);
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = ({ item }) => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="p-5">
      <div className="btn-header gap-2 px-2 flex justify-between">
        <h3
          className="text-xl  font font-bold cursor-pointer"
          onClick={toggleView}
        >
          {nestedCategory.title}
        </h3>
        {isVisible ? (
          <SlArrowUp className="" onClick={toggleView} />
        ) : (
          <SlArrowDown onClick={toggleView} />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col justify-evenly">
          {nestedCategory.categories.map((item) => (
            <RestaurentItemCategories key={item.id} itemCategory={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurentNestedItemCategory;
