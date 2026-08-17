import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="bg-slate-50">
      <div>
        <p className="text-4xl font-bold text-center py-5">Contact Us</p>
        <p className="text-2xl  text-center ">
          We’re here to help - reach out anytime, and we’ll be happy to assist.
        </p>
      </div>

      <div className="flex justify-between mt-10 bg-[#F7D0B0]">
        <div className="bg-[#F7D0B0] h-100 w-full ">
          <p className="text-2xl font-bold text-center text-black pt-5 ">
            Send us a Message
          </p>
          <p className="text-lg  text-center text-black pt-1 ">
            Fill out the form below and we will get back to you soon
          </p>
          <div>
            <div className="flex pt-5 justify-center ">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[41.5%] mr-5 py-[5px]  rounded-[8px] border-1 indent-3 focus:outline-none"
              />{" "}
              <input
                type="text"
                placeholder="Email"
                className=" py-[5px] w-[41.5%]  rounded-[8px] border-1 indent-3 focus:outline-none"
              />
            </div>
            <div className="py-5 flex justify-center">
              <input
                type="text"
                placeholder="Subject"
                className=" w-[86%]  py-[5px]  rounded-[8px] border-1 indent-3 focus:outline-none"
              />
            </div>

            <div className="flex justify-center">
              <textarea
                name=""
                id=""
                placeholder="Your Message"
                className=" h-30 w-[86%]    rounded-[8px] border-1 indent-3 focus:outline-none placeholder:py-[5px]"
              ></textarea>
            </div>
            <button className="mt-4 py-1 px-20 bg-black text-white rounded-md block mx-auto hover:scale-105 duration-500">
              Send Message ⟶
            </button>
          </div>
        </div>

        <div>
          <div className="h-100 w-200 overflow-hidden rounded-l-3xl">
            <img src="Contact-image.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" py-10  flex justify-around">
        <div className="bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300">
          <p className="text-center text-5xl">
            <FontAwesomeIcon icon={faLocationDot} />
          </p>
          <p className="text-center text-2xl font-bold mt-3">Visit Us</p>
          <p className="text-center text-base mt-2">
            Chennai, TamilNadu <br />
            India
          </p>
        </div>
        <div className="bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300">
          <p className="text-center text-5xl">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </p>
          <p className="text-center text-2xl font-bold mt-3">Email Us</p>
          <p className="text-center text-base mt-2">
            hazeef135@gmail.com
            <br />
            We'll reply within 24h
          </p>
        </div>
        <div className="bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300">
          <p className="text-center text-5xl">
            <FontAwesomeIcon icon={faPhone} />{" "}
          </p>
          <p className="text-center text-2xl font-bold mt-3">Call Us</p>
          <p className="text-center text-base mt-2">
            +91 9344275867
            <br />
            Connect with us anytime
          </p>
        </div>
        <div className="bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300">
          <p className="text-center text-5xl">
            <FontAwesomeIcon icon={faClock} />{" "}
          </p>
          <p className="text-center text-2xl font-bold mt-3">Working Hours</p>
          <p className="text-center text-base mt-2">
            Mon - Sat, 9AM - 6PM
            <br />
            Sunday Closed
          </p>
        </div>
      </div>
    </div>
  );
};
