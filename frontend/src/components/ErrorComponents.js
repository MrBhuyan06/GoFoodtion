import React from "react";
import ERROR from "../img/404 Error.jpg";
import { useRouteError } from "react-router-dom";
const ErrorComponents = () => {
  // console.log(useRouteError());
  const {
    data,
    error: { message },
    statusText,
  } = useRouteError();
  // console.log(data, message, statusText);
  return (
    <div className="w-full h-full bg-green mt-20">
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto ">
          <img src={ERROR} alt="" />
          <p className="bg-orange-600 p-4 text-center text-xl text-white">
            {message}
          </p>
          <p className="text-xl mt-4 text-center border-b-2">
            Oops , seem like you enter wrong path
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponents;
