import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";
import { categories } from "../utils/constant.js";
import loader from "./loader.js";
const MenuCreateContainer = () => {
  const [tittle, setTittle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setfields] = useState(false);
  const [msg, setMsg] = useState(null);
  const [alterStatus, setalterStatus] = useState("danger");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full min-h-screen flex justify-center items-center  ">
      <div className="w-[90%] md:w-[75%]  border-2 border-gray-200 p-4 rounded-lg flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center font-semibold ${
              alterStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            } `}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={tittle}
            placeholder="Gie me a tittle"
            className="w-full h-full text-lg bg-transparent font-semibold outline-none  border-none placeholder:text-gray-500"
            onChange={(e) => {
              setTittle(e.target.value);
            }}
          />
        </div>
        <div className="w-full ">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none text-base w-full border-b-2 border-gray-200 p-2 rounded cursor-pointer text-headingColor"
          >
            <option value="other" className=" bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((cate) => {
                return (
                  <option
                    key={cate.id}
                    value={cate.urlParamName}
                    className="bg-white text-base border-0 outline-none capitalize text-headingColor"
                  >
                    {cate.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer">
          {isLoading && <loader />}
        </div>
      </div>
    </div>
  );
};

export default MenuCreateContainer;
