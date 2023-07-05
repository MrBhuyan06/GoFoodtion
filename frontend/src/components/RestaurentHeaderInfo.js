import React from "react";
import { SWIGGY_IMG_CDN } from "../utils/constant.js";
import { MdGrade } from "react-icons/md";
const RestaurentHeaderInfo = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
  sla,
  costForTwoMessage,
}) => {
  return (
    <div className="w-full h-60 bg-blue-950  rounded-md -ml-2">
      <div className="w-1/2 flex gap-2 items-center  mx-auto h-60 bg-blue">
        <img
          className="w-[255px] h-[165px] rounded-md  "
          src={`${SWIGGY_IMG_CDN}${cloudinaryImageId}`}
          alt=""
        />
        <div>
          <h1 className="text-white text-4xl flex items-center">{name}</h1>
          <p className="text-primary text-lg">{cuisines.join(",")}</p>
          <div className="flex gap-3 text-white">
            <div className="flex items-center text-white  px-4 rounded-md py-0 gap-1 bg-red-500">
              <MdGrade className="" />
              <span className="mt-1"> {avgRatingString} </span>
            </div>
            <div>|</div>
            <span>{sla.slaString}</span>
            <div>|</div>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentHeaderInfo;
