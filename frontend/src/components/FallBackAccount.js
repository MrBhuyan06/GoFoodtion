import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
import { useStateValue } from "../context/StateProvider.js";
import { PAYMENT_METHODS, USERS_ADDRESS_LIST } from "../utils/constant.js";
import { Link } from "react-router-dom";
import AddressCard from "./AddressCard.js";
import PaymentDetails from "./PaymentDetails.js";
import { actionType } from "../context/reducers.js";
const FallBackAccount = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  //loginHandler
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      console.log(providerData[0]);
    }
  };

  return (
    <div className="flex flex-row  border-2 bg-gradient-to-tr from-orange-400 to-orange-600  ">
      {user === null ? (
        <div className="flex flex-col w-full md:w-1/2 items-center justify-start  mx-4 gap-4 ">
          <div>
            <h1 className="text-xl text-title mb-2 font-bold ">Account</h1>
            <p className="text-black text-lg">
              Prepare your taste buds for an epic feast! Sign in to savor the
              flavors and place your food order now! 🍔🍕🌮
            </p>
          </div>

          <div className="">
            <h1 className="text-base text-bio font-bold ">
              Click on Login button{" "}
            </h1>

            <button
              onClick={login}
              className="w-[100px] h-[50px] bg-red-600 rounded border border-yellow text-sm text-blue-dark"
            >
              LOG IN
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start mx-4 gap-4">
          <div>
            <div className="bg-white shadow-md p-7 flex flex-col ">
              <h1 className="text-xl mt-2.5 text-title font-bold ">
                Delivery Address
              </h1>
              <div className="flex flex-wrap justify-around items-center w-[100%]">
                {USERS_ADDRESS_LIST.map((address) => {
                  return <AddressCard {...address} key={address.id} />;
                })}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md p-7">
            <h1 className="text-xl mt-2.5 text-title font-bold ">
              Payment Method
            </h1>
            <div className="flex flex-wrap justify-around items-center w-[100%]">
              {PAYMENT_METHODS.map((payment) => {
                return <PaymentDetails {...payment} key={payment.id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FallBackAccount;
