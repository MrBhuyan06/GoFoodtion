import React from "react";
import { DELIVERY_ITEMS } from "../utils/constant.js";
import Slider from "react-slick";
import NextArrow from "./nextArrow.js";
import PrevArrow from "./PrevArrow.js";
import DeliveryItems from "./DeliveryItems.js";

const settings = {
  //   dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollection = () => {
  return (
    <div className="container rounded-md mt-4 bg-primary  mx-auto p-16    ">
      <div className="text-headingColor text-3xl text-bold mb-4 ml-4 ">
        Eat What Make You Happy
      </div>
      <div className=" w-full h-full  px-20  py-2">
        <Slider {...settings} className="">
          {DELIVERY_ITEMS.map((item, i) => {
            return <DeliveryItems {...item} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
