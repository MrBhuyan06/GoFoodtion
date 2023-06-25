import React from "react";
import { Outlet, useParams } from "react-router-dom";
import TapOption from "./TapOption.js";

const TapFeature = () => {
  const { optionid } = useParams();
  return (
    <div>
      <h1 className="text-headingColor mt-28">{optionid}</h1>

      <TapOption />
    </div>
  );
};

export default TapFeature;
