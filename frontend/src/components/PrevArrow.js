import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white rounded-full flex justify-center items-center p-1`}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;
