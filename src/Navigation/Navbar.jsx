import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Collection from "../Pages/Collection";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between  bg-slate-200 text-black py-5 px-10 ">
      <div>
        <p className="text-4xl font-semibold">ZORVEX</p>
      </div>

      <div className="flex gap-8 mt-1 mr-28">
        <button
          className="text-[19px] cursor-pointer hover:border-b-3 "
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className=" text-[19px] cursor-pointer hover:border-b-3  "
          onClick={() => navigate("/collection")}
        >
          Collections
        </button>
        <button
          className=" text-[19px] cursor-pointer hover:border-b-3"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>

      <div className="mt-3">
        <FontAwesomeIcon icon={faCartShopping} className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
