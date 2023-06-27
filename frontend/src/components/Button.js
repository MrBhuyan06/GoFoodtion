import React from "react";

const Button = (props) => {
  return (
    <button className=" ml-8 btn btn-primary bg-orange-400 px-2 py-1  rounded-lg hover:bg-orange-300 transition-all ease-in-out cursor-pointer text-headingColor text-md font-semibold">
      {props.name}
    </button>
  );
};

export default Button;
