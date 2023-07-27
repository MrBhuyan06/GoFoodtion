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

  const [seacrhTxt, setSearchTxt] = useState("Namaste");

  const { optionid } = useParams();
  console.log(optionid);

  const handleChange = (seacrhTxt) => setSearchTxt(seacrhTxt);
  const updateFilterRestaurent = (allResTaurent) => {
    optionid.includes("Nightlife")
      ? SetFilterRestaurenNight(allResTaurent)
      : SetFilterRestaurentDinning(allResTaurent);
    // SetFilterRestaurentDinning(allResTaurentDinnig);
  };
  // SetFilterRestaurenNight(allResTaurentNight);
  // const updateFilterRestaurentNight = (allResTaurentDinnig) =>
  //   SetFilterRestaurenNight(allResTaurentNight);
  // // SetFilterRestaurenNight(allResTaurentNight);

  //Fake Api call for Data
  useEffect(() => {
    getRestaurent();
    console.log("useEffect");
  }, []);

  const getRestaurent = function () {
    SetAllRestaurentDinning(RESTAURENT_DINING);
    SetFilterRestaurentDinning(RESTAURENT_DINING);
    SetAllRestaurentNight(RESTAURENT_NIGHTLIFE);
    SetFilterRestaurenNight(RESTAURENT_NIGHTLIFE);
  };

  // Dinning Out
  // console.log(filterResTaurent);
  // console.log(RESTAURENT_DINING);
  console.log("render");
  console.log(seacrhTxt);
  console.log(allResTaurentDinnig);
  return optionid.includes("Nightlife") ? (
    <div>
      <h2 className="text-headingColor text-5xl  font-extrabold text-center container  mb-2 mx-auto mt-28">
        {optionid}
      </h2>

      <TapOption />

      <section className="top-0 right-0  z-50 w-full   md:p-6 md:px-16 ">
        {/* Dining Collection */}
        <div className=" w-full h-full md:px-20  md:py-2">
          <Slider {...settings} className="">
            {COLLECTIONS_NIGHT.map((item, i) => {
              return <CollectionCards {...item} key={i} />;
            })}
          </Slider>
        </div>
      </section>
      <div className="search-filter-components">
        <FilterComponets
          placeHolder={"Search Restaurent"}
          handleChange={handleChange}
          value={seacrhTxt}
          restaurentList={allResTaurentNight}
          updateFilterRestaurent={updateFilterRestaurent}
          // updateFilterRestaurentNight={updateFilterRestaurentNight}
        />
        <main className="w-screen border-4 px-16 p-6 ">
          <div className="container border-4 min-h-screen flex flex-wrap justify-items-center items-center justify-center gap-4 ">
            {filterResTaurentNight.length === 0 ? (
              <h1 className=" text-headingColor  self-start">
                <p className="text-orange-400 bg-black p-4 rounded">
                  NO RESTAURENT FOUND
                </p>
              </h1>
            ) : (
              filterResTaurentNight.map((res, i) => {
                console.log(res);
                return <FeatureCard {...res?.info} key={res.info.resId} />;
              })
            )}
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

      <section className="top-0 right-0  z-50 w-screen  bg-primary  md:p-6 md:px-16 ">
        {/* Dining Collection */}
        <div className=" w-full h-full  md:px-20  md:py-2">
          <Slider {...settings} className="">
            {COLLECTIONS_DINING.map((item, i) => {
              return <CollectionCards {...item} key={i} />;
            })}
          </Slider>
        </div>
      </section>
      <div className="search-filter-components">
        <FilterComponets
          placeHolder={"Search Restaurent"}
          handleChange={handleChange}
          value={seacrhTxt}
          restaurentList={allResTaurentDinnig}
          updateFilterRestaurent={updateFilterRestaurent}
        />
        <main className="w-screen border-4 px-16 p-6 ">
          <div className="container border-4 min-h-screen flex flex-wrap justify-items-center items-center justify-center gap-4 ">
            {filterResTaurentDinning.length === 0 ? (
              <h1 className=" text-headingColor  self-start">
                <p className="text-orange-400 bg-black p-4 rounded">
                  NO RESTAURENT FOUND
                </p>
              </h1>
            ) : (
              filterResTaurentDinning.map((res, i) => {
                console.log(res);
                return <FeatureCard {...res?.info} key={res.info.resId} />;
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TapFeature;
