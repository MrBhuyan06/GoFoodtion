import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DeliveryItems = ({ id, cover, tittle }) => {
  return (
    <div className="items-cover  flex flex-col justify-center items-center max-w-[220px]  mb-4 min-h[340px] ml-4 p-2 bg-primary shadow-lg rounded-md ">
      <div className="">
        <img
          src={cover}
          className="h-full w-full  object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="text-headingColor text-xl  mt-4 font-bold text-ellipsis ">
        {tittle}{" "}
      </div>
    </div>
  );
};

export default DeliveryItems;
