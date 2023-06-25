import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TapListFeature = ({
  id,
  name,
  backdrop,
  activeconfig,
  setActiveconfig,
  inactive_img,
  active_img,
}) => {
  return (
    <div
      onClick={() => {
        setActiveconfig();
        console.log("click");
      }}
      className="tab-image-conatiiner flex gap-4 items-center p-4 rounded-md cursor-pointer   "
      style={{
        backgroundColor: `${activeconfig === name ? backdrop : ""}`,
        borderBottom: `${activeconfig === name ? "2px solid #EB4D4B" : ""}`,
      }}
    >
      <h3
        className=" text-xl text-bold"
        style={{
          color: `${activeconfig === name ? "#EB4D4B" : "#1f1f1f"}`,
        }}
      >
        {name}
      </h3>
      <img
        style={{
          color: `${activeconfig === name ? "#EB4D4B" : "#1f1f1f"}`,
        }}
        className="w-10"
        src={`${activeconfig === name ? active_img : inactive_img}`}
        alt={name}
      />
    </div>
  );
};

export default TapListFeature;
