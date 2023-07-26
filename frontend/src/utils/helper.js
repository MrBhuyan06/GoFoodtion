export const searchRestaurent = function (seachTxt, restaurents) {
  console.log(restaurents);
  const filterRestaurentResult = restaurents.filter((res) => {
    return res.info.name.toLowerCase().includes(seachTxt.toLowerCase());
  });
  return filterRestaurentResult;
};
export const searchRestaurentSWiggy = function (seachTxt, restaurents) {
  console.log(restaurents);
  const filterRestaurentResult = restaurents.filter((res) => {
    return res?.info?.name.toLowerCase().includes(seachTxt.toLowerCase());
  });
  return filterRestaurentResult;
};

export const ratingRestaurent = function (restaurents) {
  const ratingRestaurentResult = restaurents.filter((res) => {
    return Number(res?.info?.rating?.rating_text) >= 4.5;
  });
  return ratingRestaurentResult;
};

export const fetchUser = function () {
  const userInfo =
    localStorage.getItem("user") !== "undefine"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
export const fetchCart = function () {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefine"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

//Check if an object is empty
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};
