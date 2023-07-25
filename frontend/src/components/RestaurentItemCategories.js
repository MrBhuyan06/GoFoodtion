import { useState } from "react";
import RestaurentMenuItems from "./RestaurentMenuItems.js";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const RestaurentItemCategories = ({ itemCategory }) => {
  console.log(itemCategory);
  const [isVisible, setIsVisible] = useState(true);
  const toggleView = function () {
    setIsVisible(!isVisible);
  };
  return (
    <div className="p-5">
      <div className="btn-header flex items-center px-2  justify-between">
        <h3
          className="text-xl cursor-pointer  font font-bold"
          onClick={toggleView}
        >
          {itemCategory.title}
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} />
        ) : (
          <SlArrowDown onClick={toggleView} />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col  justify-evenly">
          {itemCategory.itemCards.map((item) => (
            <RestaurentMenuItems
              key={item.card.info.id}
              data={item.card.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurentItemCategories;
