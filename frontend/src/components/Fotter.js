import React from "react";
import { useStateValue } from "../context/StateProvider.js";
// console.log(dispatch());
const Fotter = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="mt-4 w-full border-2 h-20 bg-gradient-to-tr from-orange-500 to-orange-500">
      <div className="container flex items-center h-full justify-around">
        {user ? (
          <span className="text-lg text-black font-bold">{`Welcome ${user?.displayName}`}</span>
        ) : (
          <span>{`Please Login To your Account`}</span>
        )}
        <p className="text-xl font-semibold">Made With ❣️ By Abhishek Bhuyan</p>
      </div>
    </div>
  );
};

export default Fotter;
// {user.user.displayName}
