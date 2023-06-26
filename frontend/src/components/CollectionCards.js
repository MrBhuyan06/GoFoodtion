import React from "react";

const CollectionCards = ({ cover, title, places }) => {
  return (
    <div
      className=" collection-card flex  flex-col  justify-end gap-2   bg-black bg-blend-difference rounded 
      bg-cover bg-center object-cover
      max-w-[260px]  mb-4 ] min-h-[320px] relative overflow-hidden "
      style={{
        backgroundImage: `url(${cover})`,
        // minHeight: "320px",
      }}
    >
      <div className="text-white px-2 text-lg z-20  font-semibold text-ellipsis ">
        {title}
      </div>
      <div className="text-white z-10 px-2 ">{places}</div>
    </div>
  );
};

export default CollectionCards;
