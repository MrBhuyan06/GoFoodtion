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
const changeToNumberPrice = (priceString) => {
  const stringWithNumbers = priceString;
  const numericValues = stringWithNumbers.match(/\d+(,\d+)?/g).map((numStr) => {
    // Remove commas from four-digit numbers

    return numStr.includes(",")
      ? parseInt(numStr.replace(/,/g, ""), 10)
      : parseInt(numStr, 10);
  });
  return Number(numericValues);
};
//sorting res
export const sortingRes = (res, work) => {
  let sorts = "lowtohigh";
  console.log(res);
  const sortResData = res;
  const sortRes = sortResData.sort((a, b) =>
    sorts === work
      ? changeToNumberPrice(a.info.textcostForTwo) -
        changeToNumberPrice(b.info.costForTwo)
      : changeToNumberPrice(b.info.costForTwo) -
        changeToNumberPrice(a.info.costForTwo)
  );
  // console.log(res);

  return sortRes;
};
export const sortingResZom = (res, work) => {
  let sorts = "lowtohigh";
  console.log(res);
  const sortResData = res;
  const sortRes = sortResData.sort((a, b) =>
    sorts === work
      ? changeToNumberPrice(a.info?.cft?.text) -
        changeToNumberPrice(b.info?.cft?.text)
      : changeToNumberPrice(b.info?.cft?.text) -
        changeToNumberPrice(a.info?.cft?.text)
  );
  // console.log(res);
  console.log(sortRes);
  return sortRes;
};
