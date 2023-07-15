import React from "react";
import { useStateValue } from "../context/StateProvider.js";
// console.log(dispatch());
const Fotter = () => {
  // const [user] = useStateValue();
  // console.log(user.user.displayName);
  return (
    <div className="mt-4 border-2">
      <div>Welcome </div>
      <p className="">Made With ❣️ By Abhishek</p>
    </div>
  );
};

export default Fotter;
// {user.user.displayName}
