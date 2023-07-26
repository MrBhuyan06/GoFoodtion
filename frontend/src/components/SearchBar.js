import { useId, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { searchRestuarent } from "../utils/helper.js";
import { searchRestaurent, searchRestaurentSWiggy } from "../utils/helper.js";
import { useParams } from "react-router-dom";
const SearchBar = (props) => {
  const {
    handleChange,
    placeHolder,
    value,
    restaurentList,
    updateFilterRestaurent,
    // updateFilterRestaurentNight
  } = props;
  // console.log(props);
  const { optionid } = useParams();
  console.log(optionid);
  // console.log(handleChange);
  // console.log(restaurentList);
  // const { optionid } = useParams();
  return (
    <div className="search-bar w-full flex gap-2 ">
      <div className="search flex  items-center bg-primary rounded-lg  border-2 w-300 h-8 px-2">
        <input
          className="bg-transparent  border-0 w-full  "
          type="search"
          // value={props.value}
          placeholder={placeHolder}
          onChange={(e) => {
            //   props.handleChange(e.target.value);
            handleChange(e.target.value);
            console.log("press");
            if (optionid) {
              console.log("press");
              const searchResault = searchRestaurent(value, restaurentList);
              console.log(searchResault);
              updateFilterRestaurent(searchResault);
            } else {
              const searchResault = searchRestaurentSWiggy(
                value,
                restaurentList
              );
              console.log(searchResault);
              console.log("enter");
              updateFilterRestaurent(searchResault);
            }
          }}
          value={value}
        />
        <AiOutlineSearch className="search-icon" />
      </div>
      <button
        className="btn btn-primary bg-orange-400 px-4 rounded-lg hover:bg-orange-300 transition-all ease-in-out cursor-pointer text-headingColor text-lg font-semibold"
        // onClick={() => {
        //   console.log("press");
        //   console.log(props.value, props.restaurentList);
        //   const data = searchRestuarent(props.value, props.restaurentList);
        //   console.log(data);
        //   props.updateFilterRestaurent(data);
        // }}
        onClick={() => {
          if (optionid) {
            console.log("press");
            const searchResault = searchRestaurent(value, restaurentList);
            console.log(searchResault);
            updateFilterRestaurent(searchResault);
          } else {
            const searchResault = searchRestaurentSWiggy(value, restaurentList);
            console.log(searchResault);
            console.log("enter");
            updateFilterRestaurent(searchResault);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
