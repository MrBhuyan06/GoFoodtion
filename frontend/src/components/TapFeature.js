import React from "react";
import { Outlet, useParams } from "react-router-dom";
import TapOption from "./TapOption.js";
import { COLLECTIONS_DINING, DININGCOLLECTION } from "../utils/constant.js";
import Slider from "react-slick";
import NextArrow from "./nextArrow.js";
import PrevArrow from "./PrevArrow.js";
import CollectionCards from "./CollectionCards.js";
import { DELIVERY_ITEMS } from "../utils/constant.js";

const settings = {
  //   dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TapFeature = () => {
  const { optionid } = useParams();
  return (
    <div>
      <h2 className="text-headingColor text-5xl  font-extrabold text-center container  mb-2 mx-auto mt-28">
        {optionid}
      </h2>

      <TapOption />

      <section className="top-0 right-0  z-50 w-screen  bg-primary  p-6 px-16 ">
        {/* Dining Collection */}
        <div className=" w-full h-full  px-20  py-2">
          <Slider {...settings} className="">
            {COLLECTIONS_DINING.map((item, i) => {
              return <CollectionCards {...item} key={i} />;
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default TapFeature;
