import React, { useState } from "react";
import { SWIGGY_IMG_CDN } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";
const RestaurentMenuItems = ({ data }) => {
  //   console.log(price);
  const dispatch = useDispatch();
  let [itemCount, setitemCount] = useState(0);
  const handleAddItem = (data) => {
    dispatch(addItem(data));
    setitemCount(itemCount + 1);
  };
  const handleRemoveItem = (data) => {
    let updateCount;
    dispatch(removeItem(data.id));
    updateCount = itemCount > 0 ? itemCount - 1 : 0;
    setitemCount(updateCount);
  };
  // console.log(name);
  return (
    <div
      className="flex justify-between bg-card rounded-md mb-2 box-shadow-lg  basis-[848px] max-h-[180px] p-5  border-b border-gray"
      key={data.id}
    >
      <div className="flex gap-2 flex-col basis-[400px]">
        <h3 className="text-md  font font-bold cursor-pointer">{data.name}</h3>
        <p className="text-text-lighttextGray text-lg">
          {data.price > 0 ? `₹ ${data.price / 100}` : " "}
        </p>
        <p className="text-lighttextGray text-md">{data.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        <img
          className="w-[118px] h-[96px]"
          src={`${SWIGGY_IMG_CDN}${data.imageId}`}
          alt=""
        />
        <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray">
          <button onClick={() => handleRemoveItem(data)}> - </button>
          <span>{itemCount}</span>
          <button onClick={() => handleAddItem(data)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenuItems;
