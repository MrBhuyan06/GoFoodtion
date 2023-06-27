import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import TapOption from "./TapOption.js";
import {
  COLLECTIONS_DINING,
  COLLECTIONS_NIGHT,
  DININGCOLLECTION,
  RESTAURENT_DINING,
  RESTAURENT_NIGHTLIFE,
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
  const [allResTaurentDinnig, SetAllRestaurentDinning] = useState([]);
  const [filterResTaurentDinning, SetFilterRestaurentDinning] = useState([]);
  const [allResTaurentNight, SetAllRestaurentNight] = useState([]);
  const [filterResTaurentNight, SetFilterRestaurenNight] = useState([]);

  //Fake Api call for Data
  useEffect(() => {
    getRestaurent();
    console.log("useEffect");
  }, []);

  const getRestaurent = function () {
    SetAllRestaurentDinning(RESTAURENT_DINING);
    SetFilterRestaurentDinning(RESTAURENT_DINING);
    SetAllRestaurentNight(RESTAURENT_NIGHTLIFE);
    SetAllRestaurentNight(RESTAURENT_NIGHTLIFE);
  };

  const { optionid } = useParams();
  console.log(optionid);

  // Dinning Out
  // console.log(filterResTaurent);
  // console.log(RESTAURENT_DINING);
  console.log("render");
  return optionid.includes("Nightlife") ? (
    <div>
      <h2 className="text-headingColor text-5xl  font-extrabold text-center container  mb-2 mx-auto mt-28">
        {optionid}
      </h2>

      <TapOption />

      <section className="top-0 right-0  z-50 w-screen  bg-primary  p-6 px-16 ">
        {/* Dining Collection */}
        <div className=" w-full h-full  px-20  py-2">
          <Slider {...settings} className="">
            {COLLECTIONS_NIGHT.map((item, i) => {
              return <CollectionCards {...item} key={i} />;
            })}
          </Slider>
        </div>
      </section>
      <div className="search-filter-components">
        <FilterComponets />
        <main className="w-screen border-4 px-16 p-6 ">
          <div className="container border-4 min-h-screen flex flex-wrap justify-items-center items-center justify-center gap-4 ">
            {filterResTaurentNight.map((res, i) => {
              console.log(res);
              return <FeatureCard {...res?.info} key={res.info.resId} />;
            })}
          </div>
        </main>
      </div>
    </div>
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
          <div className="container border-4 min-h-screen flex flex-wrap justify-items-center items-center justify-center gap-4 ">
            {filterResTaurentDinning.map((res, i) => {
              console.log(res);
              return <FeatureCard {...res?.info} key={res.info.resId} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TapFeature;
