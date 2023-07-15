import React, { useState } from "react";
import { motion } from "framer-motion";
import { saveItem } from "../utils/firebaseFunction.js";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdCurrencyRupee,
} from "react-icons/md";
import { categories } from "../utils/constant.js";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import Loaders from "./Loaders.js";
import { storage } from "../firebase.config.js";
const MenuCreateContainer = () => {
  const [tittle, setTittle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setfields] = useState(false);
  const [msg, setMsg] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [alterStatus, setalterStatus] = useState("danger");
  const [isLoading, setIsLoading] = useState(false);
  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const stoargeRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(stoargeRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProcess =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setfields(true);
        setMsg("Error While uploading try agiain 😊");
        setalterStatus("danger");
        setTimeout(() => {
          setfields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setfields(true);
          setMsg("image uploaded Succesfully  😊");
          setalterStatus("success");
          setTimeout(() => {
            setfields(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setMsg("image deleted Successfully");
      setalterStatus("success");
      setTimeout(() => {
        setfields(false);
      }, 4000);
    });
  };
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!tittle || !calories || !imageAsset || !categories) {
        setfields(true);
        setMsg("Required Fields must be filled");
        setalterStatus("danger");
        setTimeout(() => {
          setfields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          tittle: tittle,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setMsg("Data uploaded Successfully");
        setalterStatus("success");
        clearData();
        setTimeout(() => {
          setfields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setfields(true);
      setMsg("Error While uploading try agiain 😊 man");
      setalterStatus("danger");
      setTimeout(() => {
        setfields(false);
        setIsLoading(false);
      }, 4000);
    }
  };

  const clearData = () => {
    setTittle("");
    setCalories("");
    setCategory("Select Category");
    setPrice("");
    setImageAsset(null);
  };

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
            className="w-full h-full text-lg bg-transparent outline-none  border-none placeholder:text-gray-500"
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
          {isLoading ? (
            <Loaders />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full  h-full flex flex-col items-center justify-center  cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 text-3xl hover:text-gray-700">
                        click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className=" relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all  ease-in-out "
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder="calories"
              value={calories}
              onChange={(e) => {
                setCalories(e.target.value);
              }}
              className="w-fll h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdCurrencyRupee className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="price"
              className="w-fll h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg font-semibold text-headingColor"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCreateContainer;
