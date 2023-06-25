import React from "react";

const BrandItems = ({ id, tittle, cover, time }) => {
  return (
    <div className="items-cover  flex flex-col justify-center items-center max-w-[220px]  mb-4 ml-4 p-2 min-h[240px]  bg-primary shadow-lg rounded-md ">
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
      <div className="text-headingColor text-sm  mt-4  text-ellipsis ">
        {time}{" "}
      </div>
    </div>
  );
};

export default BrandItems;
