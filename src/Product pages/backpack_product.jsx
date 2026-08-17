import React, { useState } from "react";
import useApi from "../Custom Hook/hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Atom } from "react-loading-indicators";

const Backpack_product = () => {
  const { data,loading } = useApi("https://zorvex-api.onrender.com/bags");
  const [text, setText] = useState("");
  const search = data.filter((product) =>
    product.name.toLowerCase().includes(text.toLowerCase()),
  );

  if (loading) {
    return (
      <div  className="flex  justify-center pt-[13%]  py-[20%]">
        <div>
          <Atom color="black" size="large" text="" textColor="" className="" />
          <h3 className="text-black text-xl font-bold text-center " >Loading.....</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <div className="py-5">
        <p className="text-4xl font-bold text-center">Backpacks</p>
        <p className="text-2xl text-center mt-3">
          Carry your essentials in style with premium backpacks
        </p>
      </div>

      <div className="flex justify-center py-5">
        <p className="absolute left-[20.5%] top-58 text-2xl">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </p>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setText(e.target.value)}
          className="w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12"
        />
      </div>

      <div className="grid grid-cols-3 place-items-center pb-20  ">
        {search.map((product) => (
          <div className="h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10 mb-10 border-5 hover:scale-105 duration-500">
            <div className="h-60 w-80 bg-black  overflow-hidden   pb-1 ">
              <img
                className="h-full w-full object-cover  "
                src={product.image}
                alt=""
              />
            </div>
            <p className="text-black text-center text-[20px] font-medium mt-2 ">
              {product.name}
            </p>
            <p className="text-black text-[22px]  font-bold text-center mt-5">
              ₹{product.price}
            </p>
            <button className="text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backpack_product;
