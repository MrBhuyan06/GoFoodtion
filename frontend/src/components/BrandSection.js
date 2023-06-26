import React from "react";
import { TOP_BRAND } from "../utils/constant.js";
import NextArrow from "./nextArrow.js";
import PrevArrow from "./PrevArrow.js";
import Slider from "react-slick";
import BrandItems from "./BrandItems.js";
const settings = {
  //   dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const BrandSection = () => {
  return (
    <div className="container  rounded-md mt-4 mx-auto p-16    ">
      <div className="text-headingColor text-3xl text-bold mb-8 ml-4 ">
        Top Brands for You
      </div>
      <div className=" w-full h-full  px-20  py-2">
        <Slider {...settings} className="">
          {TOP_BRAND.map((item, i) => {
            return <BrandItems {...item} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSection;
