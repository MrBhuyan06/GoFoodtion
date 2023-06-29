import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { searchRestuarent } from "../utils/helper.js";
import { searchRestaurent } from "../utils/helper.js";

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
  // console.log(handleChange);
  // console.log(restaurentList);
  // const { optionid } = useParams();
  return (
    <div className="search-bar flex gap-2 ">
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
            const searchResault = searchRestaurent(value, restaurentList);
            console.log(searchResault);
            updateFilterRestaurent(searchResault);
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
          console.log("press");
          const searchResault = searchRestaurent(value, restaurentList);
          console.log(searchResault);
          updateFilterRestaurent(searchResault);
          // optionid.includes("Nightlife")
          //   ? updateFilterRestaurent(searchResault)
          //   : updateFilterRestaurent(searchResault);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
