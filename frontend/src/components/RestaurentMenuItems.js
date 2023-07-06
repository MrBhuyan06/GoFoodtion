import React, { useState } from "react";
import { SWIGGY_IMG_CDN } from "../utils/constant.js";

const RestaurentMenuItems = ({ name, id, price, imageId, description }) => {
  //   console.log(price);
  const [itemCount, setitemCount] = useState(0);
  console.log(name);
  return (
    <div
      className="flex justify-between bg-card rounded-md mb-2 box-shadow-lg  basis-[848px] max-h-[180px] p-5  border-b border-gray"
      key={id}
    >
      <div className="flex gap-2 flex-col basis-[400px]">
        <h3 className="text-md  font font-bold cursor-pointer">{name}</h3>
        <p className="text-text-lighttextGray text-lg">
          {price > 0 ? `₹ ${price / 100}` : " "}
        </p>
        <p className="text-lighttextGray text-md">{description}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        <img
          className="w-[118px] h-[96px]"
          src={`${SWIGGY_IMG_CDN}${imageId}`}
          alt=""
        />
        <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray">
          <button> - </button>
          <span>{itemCount}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenuItems;
