import React from "react";
import RestaurentNestedItemCategory from "./RestaurentNestedItemCategory.js";
import RestaurentItemCategories from "./RestaurentItemCategories.js";
import { useSelector } from "react-redux";
const RestaurentDetailsMain = ({ menu }) => {
  console.log(menu);
  const cartitems = useSelector((store) => store.cart.items);
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
      <div className="right w-[25%] mt-4 border-2">
        {Object.values(cartitems).length > 0 ? (
          <div>
            <h1>Cart</h1>
            <p>{Object.values(cartitems).length}</p>
          </div>
        ) : (
          <div>
            <p>Nothing in the cart please do add 🙏</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurentDetailsMain;
