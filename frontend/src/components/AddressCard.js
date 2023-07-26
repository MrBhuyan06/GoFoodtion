import React from "react";
import { useDispatch } from "react-redux";
import { updateDeliveryAddress } from "../utils/cartSlice.js";

const AddressCard = (address) => {
  const dispatch = useDispatch();
  const handleDeliveryAddress = (address) => {
    dispatch(updateDeliveryAddress(address));
  };
  return (
    <div className="flex bg-cartItem rounded-lg flex-col items-center shadow border-2 border-gray mr-4 w-52 mt-3 p-3 hover:scale-105 delay-400 transition-all">
      <h2 className=" text-white font-bold text-title text-base">
        {address.addressType}
      </h2>
      <p className="text-sm text-white border-b-2 text-bio text-ellipsis">
        {address.addressDescription}
      </p>
      <button
        className="bg-green bg-gradient-to-tr from-orange-500 to-orange-800  p-4 rounded-lg  py-1 text-white mt-1 text-sm"
        onClick={() => handleDeliveryAddress(address)}
      >
        DELIVER HERE
      </button>
    </div>
  );
};

export default AddressCard;
