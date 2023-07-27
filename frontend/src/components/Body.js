import React, { useEffect, useState } from "react";
import TapOption from "./TapOption.js";
import { Link, Outlet } from "react-router-dom";
import DeliveryCollection from "./DeliveryCollection.js";
import BrandSection from "./BrandSection.js";
import { FilterComponets, FeatureCard } from "./index.js";
import { SWIGGY_RES_API } from "../utils/constant.js";
import RestaurentCard from "./RestaurentCard.js";
import SearchBarRestaurent from "./SearchBarRestaurent.js";
import { useStateValue } from "../context/StateProvider.js";
import { sortingRes } from "../utils/helper.js";
import Shimmer from "./Shimmer.js";
const Body = () => {
  const [searchText, setSearchText] = useState("Namaste");
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);

  const handleChange = (searchText) => setSearchText(searchText);
  const updateFilterRestaurent = (res) => {
    setFilterRestaurent(res);
  };
  const [user] = useStateValue();
  // console.log(user);
  // console.log(useStateValue());

  useEffect(() => {
    getRestaurent();
  }, []);
  async function getRestaurent() {
    const data = await fetch(SWIGGY_RES_API);
    // console.log(data);
    const resData = await data.json();
    console.log(resData);
    // console.log(
    //   resData?.data?.cards[5]?.card?.card.gridElements.infoWithStyle.restaurants
    // );
    setAllRestaurent(
      resData?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurent(
      resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log(allRestaurent);

  // Don't render component (Early return)
  if (!allRestaurent) {
    return null;
  }

  return allRestaurent?.length === 0 ? (
    // <h1>Loading....</h1>
    <div className="w-full h-screenmt-24">
      <Shimmer />
    </div>
  ) : (
    <div className="text-blue-500 mt-28 w-screen border p-8   ">
      <TapOption />

      {/* <Outlet /> */}
      <DeliveryCollection />
      <BrandSection />
      <div className="w-full search-filter-components">
        {console.log("calling again")}
        <FilterComponets
          placeHolder={"Search Restaurent"}
          handleChange={handleChange}
          value={searchText}
          restaurentList={allRestaurent}
          updateFilterRestaurent={updateFilterRestaurent}
        />
        {/* <button
          className=" btn btn-primary w-1/12 bg-orange-400 px-4 rounded-lg hover:bg-orange-300 transition-all ease-in-out cursor-pointer text-headingColor text-sm font-semibold"
          onClick={() => {
            const lowTohighRes = sortingRes(allRestaurent, "lowtohigh");
            console.log(lowTohighRes);
            setFilterRestaurent(lowTohighRes);
          }}
        >
          Low To High
        </button> */}
        <main className="  px-16 p-6 ">
          <div className="container border-4 min-h-screen flex flex-wrap justify-items-center items-center justify-center gap-4 ">
            {filterRestaurent.length === 0 ? (
              <h1 className=" text-headingColor  self-start">
                <p className="text-orange-400 bg-black p-4 rounded">
                  NO RESTAURENT FOUND
                </p>
              </h1>
            ) : (
              filterRestaurent.map((res, i) => {
                // console.log(res);
                console.log("got trigger");
                return (
                  <Link to={`restaurent/${res.info.id}`} key={res.info.id}>
                    <RestaurentCard {...res?.info} />
                  </Link>
                );
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
