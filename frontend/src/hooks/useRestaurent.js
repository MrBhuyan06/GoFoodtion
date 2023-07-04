import { useEffect, useState } from "react";
import { SWIGGY_INDIVIDUAL_RES } from "../utils/constant.js";

const useRestaurent = (resId) => {
  console.log(resId);
  const [restaurent, setRestaurent] = useState(null);
  useEffect(() => {
    getRestaurentInfo();
  }, []);

  const getRestaurentInfo = async () => {
    try {
      //Fetch The menuitems
      const response = await fetch(SWIGGY_INDIVIDUAL_RES + resId);
      console.log(response);
      const res_data = await response.json();
      console.log(res_data);
      const menuItemsList =
        res_data?.data?.cards[2]["groupedCard"].cardGroupMap?.REGULAR?.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      const menu = menuItemsList.map((items) => {
        if (
          items.card.card["@type"] === itemCategory ||
          items.card.card["@type"] === NestedItemCategory
        ) {
          return items.card.card;
        }
      });

      const modifiedData = {
        info: res_data.data.cards[0].card.card.info,
        menu: menu.filter((value) => value !== undefined),
      };
      setRestaurent(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  return restaurent;
};
export default useRestaurent;
