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
    return res?.data?.name.toLowerCase().includes(seachTxt.toLowerCase());
  });
  return filterRestaurentResult;
};

export const ratingRestaurent = function (restaurents) {
  const ratingRestaurentResult = restaurents.filter((res) => {
    return Number(res?.info?.rating?.rating_text) >= 4.5;
  });
  return ratingRestaurentResult;
};
