import { fetchUser } from "../utils/helper.js";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
};
