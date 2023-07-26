import React from "react";
import { BiTime, BiCommentDots, BiMoney } from "react-icons/bi";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";
const PaymentPages = () => {
  const payment = useSelector((store) => store.cart.paymentMethod);
  console.log(payment);
  return (
    <div className="mt-24 w-full p-4 h-screen">
      <div
        key={1}
        className="w-full md:w-1/2  flex flex-col gap-2 rounded-md mx-auto bg-gradient-to-tr from-orange-400 p-4 to-orange-700 h-[450px]"
      >
        <h1 className="text-center text-white text-lg rounded-md bg-cartItem p-2">
          Hey Name Thanks For Order from us ❤️
        </h1>
        <p className=" w-1/2 mx-auto text-justify text-white text-lg rounded-md bg-cartItem p-4">
          Congratulations on a sumptuous success! Your food order has been
          joyfully accepted and delightfully pre-paid, ensuring a hassle-free
          dining experience! <br />
          <span className="text-orange-400 mt-2">GO FOODTION 🎉🍽️💳</span>
        </p>
        <div className="w-full  flex justify-between gap-2">
          <div
            key={1}
            className="w-20 hover:scale-75 transition-all ease-in-out duration-100  rounded-md  flex flex-col justify-center items-center  text-white h-20 p-1 bg-cartItem"
          >
            <p className="text-xs">Wait Timess</p>
            <BiTime />
            <p className="text-xs">30Mins</p>
          </div>
          <div
            key={2}
            className="w-20 hover:scale-75 transition-all ease-in-out duration-100 rounded-md  flex flex-col items-center justify-center text-white  h-20 p-1 bg-cartItem"
          >
            <p className="text-xs">OTP</p>
            <BiCommentDots />
          </div>
          <div
            KEY={3}
            className="w-20 hover:scale-75 transition-all ease-in-out duration-100  rounded-md flex flex-col items-center justify-center text-white h-20 p-1 bg-cartItem"
          >
            <p className="text-xs">Delivey</p>
            <BiMoney />
            <p className="text-xs">{payment.paymentType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPages;
