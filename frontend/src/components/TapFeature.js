import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import TapOption from "./TapOption.js";
import {
  COLLECTIONS_DINING,
  DININGCOLLECTION,
  RESTAURENT_DINING,
} from "../utils/constant.js";
import Slider from "react-slick";
import NextArrow from "./nextArrow.js";
import PrevArrow from "./PrevArrow.js";
import CollectionCards from "./CollectionCards.js";
import { DELIVERY_ITEMS } from "../utils/constant.js";
import { FilterComponets, FeatureCard } from "./index.js";

const settings = {
  //   dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TapFeature = () => {
  const [allResTaurent, SetAllRestaurent] = useState([]);
  const [filterResTaurent, SetFilterRestaurent] = useState([]);

  //Fake Api call for Data
  useEffect(() => {
    getRestaurent();
    console.log("useEffect");
  }, []);

  const getRestaurent = function () {
    SetAllRestaurent(RESTAURENT_DINING);
    SetFilterRestaurent(RESTAURENT_DINING);
  };

  const { optionid } = useParams();
  console.log(filterResTaurent);
  console.log(RESTAURENT_DINING);
  console.log("render");
  return allResTaurent.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
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
      <div className="search-filter-components">
        <FilterComponets />
        <main className="w-screen border-4 px-16 p-6 ">
          <div className="container border-4 min-h-screen">
            {filterResTaurent.map((res, i) => {
              return <FeatureCard {...res?.info} key={i} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TapFeature;
