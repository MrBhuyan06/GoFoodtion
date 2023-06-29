export const searchRestaurent = function (seachTxt, restaurents) {
  console.log(restaurents);
  const filterRestaurentResult = restaurents.filter((res) => {
    return res.info.name.toLowerCase().includes(seachTxt.toLowerCase());
  });
  return filterRestaurentResult;
};
