import React, { useEffect, useState } from "react";
import TapOption from "./TapOption.js";
import { Link, Outlet } from "react-router-dom";
import DeliveryCollection from "./DeliveryCollection.js";
import BrandSection from "./BrandSection.js";
import { FilterComponets, FeatureCard } from "./index.js";
import { SWIGGY_RES_API } from "../utils/constant.js";
import RestaurentCard from "./RestaurentCard.js";
import SearchBarRestaurent from "./SearchBarRestaurent.js";
const Body = () => {
  const [searchText, setSearchText] = useState("Namaste");
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);

  const handleChange = (searchText) => setSearchText(searchText);
  const updateFilterRestaurent = (allResTaurent) => {
    setFilterRestaurent(allResTaurent);
  };

  useEffect(() => {
    getRestaurent();
  }, []);
  async function getRestaurent() {
    const data = await fetch(SWIGGY_RES_API);
    const resData = await data.json();
    console.log(resData);
    setAllRestaurent(resData?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurent(resData?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurent.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="text-blue-500 mt-28 w-screen border p-8   ">
      <TapOption />

      {/* <Outlet /> */}
      <DeliveryCollection />
      <BrandSection />
      <div className="search-filter-components">
        <FilterComponets
          placeHolder={"Search Restaurent"}
          handleChange={handleChange}
          value={searchText}
          restaurentList={allRestaurent}
          updateFilterRestaurent={updateFilterRestaurent}
        />
        <main className="w-screen border-4 px-16 p-6 ">
          <div className="container border-4 min-h-screen flex flex-wrap justify-items-center items-center justify-center gap-4 ">
            {filterRestaurent.length === 0 ? (
              <h1 className=" text-headingColor  self-start">
                No Restaurent Found
              </h1>
            ) : (
              filterRestaurent.map((res, i) => {
                console.log(res);
                return (
                  <Link to={`restaurent/${res.data.id}`} key={res.data.id}>
                    <RestaurentCard {...res?.data} />
                  </Link>
                );
                return;
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
