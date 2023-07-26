import React from "react";

const CollectionCards = ({ cover, title, places }) => {
  return (
    <div
      className=" collection-card h-[320px] flex  flex-col  justify-end gap-2 ml-4 md:ml-0  bg-black bg-blend-difference rounded 
      max-w-[260px]   mb-4  md:min-h-[320px] relative overflow-hidden bg-cover "
      style={{
        // bg-cover bg-center object-cover
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
