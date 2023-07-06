import React from "react";
import { RestaurentDetailsMain, RestaurentHeaderInfo } from "./index.js";
import { useParams } from "react-router-dom";
import { SWIGGY_INDIVIDUAL_RES, SWIGGY_IMG_CDN } from "../utils/constant.js";
import useRestaurent from "../hooks/useRestaurent.js";
const RestaurentDetailPage = () => {
  const { resId } = useParams();
  const restaurentMenu = useRestaurent(resId);
  console.log(restaurentMenu);
  // const { info, menu } = restaurentMenu;
  // console.log(info, menu);
  return !restaurentMenu ? (
    <h1 className="mt-28">Loading.......</h1>
  ) : (
    <div className="mt-28 w-full  border-2">
      <RestaurentHeaderInfo {...restaurentMenu.info} />
      <RestaurentDetailsMain menu={restaurentMenu.menu} />
    </div>
  );
};

export default RestaurentDetailPage;
