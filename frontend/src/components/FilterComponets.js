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
    <div className=" container mx-auto mt-10 border-4 min-h-[60px]  px-20 flex justify-center items-center">
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
        className=" ml-8 btn btn-primary bg-orange-400 px-2 py-1  rounded-lg hover:bg-orange-300 transition-all ease-in-out cursor-pointer text-headingColor text-md font-semibold"
        onClick={() => {
          const ratingResult = ratingRestaurent(restaurentList);
          console.log(ratingResult);
          updateFilterRestaurent(ratingResult);
        }}
      >
        Rating 4.0 +
      </button>
    </div>
  );
};

export default FilterComponets;
