import React from "react";
import { Button, SearchBar } from "./index.js";
import { ratingRestaurent } from "../utils/helper.js";

const FilterComponets = (props) => {
  // console.log(props.SetAllRestaurentDinning);
  console.log(props);
  const {
    handleChange,
    placeHolder,
    value,
    restaurentList,
    updateFilterRestaurent,
  } = props;
  console.log(restaurentList);
  return (
    <div className=" w-full md:container mx-auto mt-10 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-md  min-h-[60px]  px-20 flex justify-center items-center">
      {/* <SearchBtn /> */}
      <SearchBar
        placeHolder={placeHolder}
        handleChange={handleChange}
        value={value}
        restaurentList={restaurentList}
        updateFilterRestaurent={updateFilterRestaurent}
        // updateFilterRestaurentNight={updateFilterRestaurentNight}
      />
      {/* <Button name="Rating 4.0 +" 
      /> */}
      <button
        className=" btn btn-primary w-1/12 bg-orange-400 px-4 rounded-lg hover:bg-orange-300 transition-all ease-in-out cursor-pointer text-headingColor text-sm font-semibold"
        onClick={() => {
          const ratingResult = ratingRestaurent(restaurentList);
          console.log(ratingResult);
          updateFilterRestaurent(ratingResult);
        }}
      >
        Rating 4.0
      </button>
    </div>
  );
};

export default FilterComponets;
