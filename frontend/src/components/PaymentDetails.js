import React from "react";
import { useDispatch } from "react-redux";
import { updatePaymentMethod } from "../utils/cartSlice.js";
const PaymentDetails = ({ payment }) => {
  const dispatch = useDispatch();
  const handlePayment = (payment) => {
    dispatch(updatePaymentMethod(payment));
  };

  return (
    <div className="flex bg-cartItem rounded-lg flex-col items-center shadow border-2 border-gray mr-4 w-52 mt-3 p-3 hover:scale-105 delay-400 transition-all">
      <h2 className=" text-white font-bold text-title text-base">
        {payment && payment.paymentType}
      </h2>
      <p className="text-white border-b-2  text-sm text-bio text-ellipsis">
        {payment && payment.paymentMethod}
      </p>
      <button
        className="bg-green p-4  rounded-lg bg-gradient-to-tr from-orange-500 to-orange-800  py-1 text-white mt-1 text-sm"
        onClick={() => handlePayment(payment)}
      >
        CHOOSE PAYMENT
      </button>
    </div>
  );
};

export default PaymentDetails;
