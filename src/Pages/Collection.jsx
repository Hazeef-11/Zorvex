import React from "react";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 ">
      <div className="p-5">
        <div className=" h-50 overflow-hidden ">
          <img
            src="Collection-header.jpg"
            alt=""
            className="h-full w-full object-cover  rounded-xl"
          />
        </div>

        <div className="absolute text-center top-37 left-20">
          <p className="text-4xl font-bold ">Shop by Categories</p>
          <p className="text-xl mt-2">
            Find everything you need <br />
            in one place
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 item-center place-items-center mt-5 pb-[50px] ">
        <div className="relative h-80 w-110 hover:-translate-y-2  duration-300 mb-5 ">
          <img src="Collection1.png" alt="" className="rounded-xl" />
          <div className="absolute  top-28 left-5">
            <p className="text-2xl font-semibold ">Men's Fashion</p>
            <button
              className="bg-black px-3 py-1 text-white mt-2 rounded-md hover:cursor-pointer hover:scale-105 duration-300"
              onClick={() => navigate("/mens-product")}
            >
              Explore ➔
            </button>
          </div>
        </div>

        <div className="relative h-80 w-110 hover:-translate-y-2  duration-300 mb-5 ">
          <img src="Collection2.png" alt="" className="rounded-xl" />
          <div className="absolute top-28 left-5">
            <p className="text-2xl font-semibold ">Women's Fashion</p>
            <button
              className="bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300"
              onClick={() => navigate("/womens-product")}
            >
              Explore ➔
            </button>
          </div>
        </div>

        <div className="relative h-80 w-110 hover:-translate-y-2  duration-300 mb-5">
          <img src="Collection3.png" alt="" className="rounded-xl" />
          <div className="absolute  top-28 left-5">
            <p className="text-2xl font-semibold ">Accessories </p>
            <button
              className="bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300"
              onClick={() => navigate("/accessories-product")}
            >
              Explore ➔
            </button>
          </div>
        </div>

        <div className="relative h-80 w-110 hover:-translate-y-2  duration-300 ">
          <img src="Collection4.png" alt="" className="rounded-xl" />
          <div className="absolute  top-28 left-5">
            <p className="text-2xl font-semibold ">Footwears</p>
            <button
              className="bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300"
              onClick={() => navigate("/footwear-product")}
            >
              Explore ➔
            </button>
          </div>
        </div>

        <div className="relative h-80 w-110 hover:-translate-y-2  duration-300 ">
          <img src="Collection5.png" alt="" className="rounded-xl" />
          <div className="absolute  top-28 left-5">
            <p className="text-2xl font-semibold ">Backpacks</p>
            <button
              className="bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300"
              onClick={() => navigate("/bag-product")}
            >
              Explore ➔
            </button>
          </div>
        </div>

        <div className="relative h-80 w-110 hover:-translate-y-2  duration-300 ">
          <img src="Collection6.jpg" alt="" className="rounded-xl" />
          <div className="absolute  top-28 left-5">
            <p className="text-2xl font-semibold ">Sunglasses</p>
            <button
              className="bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300"
              onClick={() => navigate("/sunglasses-product")}
            >
              Explore ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
