import React from "react";
import { Button, SearchBar } from "./index.js";

const FilterComponets = () => {
  return (
    <div className=" container mx-auto mt-10 border-4 min-h-[60px]  px-20 flex justify-center items-center">
      {/* <SearchBtn /> */}
      <SearchBar />
      <Button name="Rating 4.0 +" />
    </div>
  );
};

export default FilterComponets;
