import { fetchUser } from "../utils/helper.js";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
