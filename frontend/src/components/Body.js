import React from "react";
import TapOption from "./TapOption.js";
import { Outlet } from "react-router-dom";
import DeliveryCollection from "./DeliveryCollection.js";
import BrandSection from "./BrandSection.js";

const Body = () => {
  return (
    <div className="text-blue-500 mt-28 w-screen border p-8   ">
      <TapOption />

      {/* <Outlet /> */}
      <DeliveryCollection />
      <BrandSection />
    </div>
  );
};

export default Body;
