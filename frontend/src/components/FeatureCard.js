import React from "react";
import { MdGrade } from "react-icons/md";

const FeatureCard = ({ name, image, rating, locality, cuisine, cft }) => {
  return (
    <div className="max-w-[308px] h-[350px]  p-2  m-2 rounded-lg bg-transparent  hover:bg-[#ffff] hover:border-2 hover:shadow-md transition-all ease cursor-pointer ">
      <img
        src={image.url}
        className="rounded-lg object-cover w-[280px] h-[200px] "
        alt=""
      />

      <div className="w-full 2 items-center mt-2 p-2 flex justify-between">
        <p className="text-headingColor text-lg font-semibold text-ellipsis">
          {name}
        </p>
        <p className="text-white flex items-center font-semibold  px-2 bg-green-700 rounded-lg">
          {rating.rating_text}
          <MdGrade />
        </p>
      </div>
      <div className="w-full items-center mt-2 px-2 flex justify-between">
        <p className="text-lighttextGray text-md  text-ellipsis">
          {cuisine[0].name}
        </p>
        <p className="text-lighttextGray 2 text-md font-semibold text-ellipsis">
          {cft.text}
        </p>
      </div>
      <div className=" mt-2 px-2 ">
        <p className="text-lighttextGray text-md text-ellipsis">
          {locality.name}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
