import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { searchRestuarent } from "../utlity/helperfunction.js";

const SearchBar = (props) => {
  //declare the state for searchText
  // console.log(props);
  // console.log(handleChange);
  return (
    <div className="search-bar flex gap-2 ">
      <div className="search flex  items-center bg-primary rounded-lg  border-2 w-300 h-8 px-2">
        <input
          className="bg-transparent  border-0 w-full  "
          type="search"
          // value={props.value}
          placeholder="Search Restaurent"
          onChange={(e) => {
            //   props.handleChange(e.target.value);
          }}
        />
        <AiOutlineSearch className="search-icon" />
      </div>
      <button
        className="btn btn-primary bg-orange-300"
        // onClick={() => {
        //   console.log("press");
        //   console.log(props.value, props.restaurentList);
        //   const data = searchRestuarent(props.value, props.restaurentList);
        //   console.log(data);
        //   props.updateFilterRestaurent(data);
        // }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
