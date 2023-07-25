import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";
function useItemTotal() {
  const cartItem = useSelector((store) => store.cart.items);
  const getItemTotal = () => {
    let total =
      cartItem &&
      Object.values(cartItem)
        .map((item) => (item.price / 100) * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    return total;
  };
  return getItemTotal;
}
export default useItemTotal;
