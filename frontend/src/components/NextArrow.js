import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white rounded-full flex justify-center items-center p-1`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      nextArrow
    </div>
  );
};

export default NextArrow;
