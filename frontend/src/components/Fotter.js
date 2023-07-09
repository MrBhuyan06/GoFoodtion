import React from "react";
import { useStateValue } from "../context/StateProvider.js";
const Fotter = () => {
  const [user] = useStateValue();
  console.log(user.user.displayName);
  return (
    <div className="mt-4 border-2">
      <div>Welcome {user.user.displayName}</div>
      <p className="">Made With ❣️ By Abhishek</p>
    </div>
  );
};

export default Fotter;
