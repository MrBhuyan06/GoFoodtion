import React from "react";
import { useStateValue } from "../context/StateProvider.js";
const About = () => {
  console.log(useStateValue());
  return (
    <div className="text-blue-800 mt-28">
      <h1 className="text-black">About</h1>
    </div>
  );
};

export default About;
