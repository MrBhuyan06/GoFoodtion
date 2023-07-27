import React from "react";
import { SWIGGY_IMG_CDN } from "../utils/constant.js";
import { MdGrade } from "react-icons/md";
const RestaurentCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  area,
}) => {
  return (
    <div className="max-w-[308px] h-[350px]  p-2  m-2 rounded-lg bg-transparent    hover:bg-[#ffff] hover:shadow-lg transition-all ease-in-out cursor-pointer ">
      <img
        src={`${SWIGGY_IMG_CDN}${cloudinaryImageId}`}
        className="rounded-lg object-cover w-[280px] h-[200px] "
        alt=""
      />

      <div className="w-full 2 items-center mt-2 p-2 flex justify-between">
        <p className="text-headingColor  text-lg font-semibold text-ellipsis">
          {name}
        </p>
        <p className="text-white flex items-center font-semibold  px-2 bg-green-700 rounded-lg">
          {avgRating}
          <MdGrade />
        </p>
      </div>
      <div className="w-full items-center mt-2 px-2 flex text-ellipsis justify-between">
        <p className="text-lighttextGray text-sm  max-w-[280px] overflow-hidden ">
          {cuisines.join(",")}
        </p>
      </div>
      <div className=" mt-2 px-2 flex justify-between">
        <p className="text-lighttextGray text-md text-ellipsis">{area}</p>
        <p className="text-lighttextGray 2 text-md w-1/2 font-semibold text-ellipsis">
          {costForTwo}
        </p>
      </div>
    </div>
  );
};

export default RestaurentCard;
