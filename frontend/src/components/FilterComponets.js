import React from "react";
import { Button, SearchBar } from "./index.js";

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
      <Button name="Rating 4.0 +" />
    </div>
  );
};

export default FilterComponets;
