import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 pb-[50px]">
      <div className="pt-5 w-full h-85 overflow-hidden flex justify-center ">
        <img
          src="Header-image.png"
          className=" h-full w-[95%] overflow-hidden rounded-xl"
          alt="Fashion"
        />
      </div>

      <div className="absolute top-48 left-30">
        <p className="text-5xl font-semibold text-white text-center">
          Define Your Style
        </p>
        <p className="text-xl mt-3 text-white text-center">
          Discover fashion that feels like you
        </p>
        <button
          onClick={() => navigate("/collection")}
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md mt-4 text-white block mx-auto hover:cursor-pointer hover:scale-110 duration-300"
        >
          Shop Now
        </button>
      </div>

      {/* Shop by Category */}

      <div>
        <div className="flex items-center gap-5 px-12 mt-9 mb-5">
          <div className="h-px bg-black flex-1"></div>

          <h2 className="text-2xl font-bold text-[#172b4d]">
            Explore Collections
          </h2>

          <div className="h-px bg-black flex-1"></div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-12 ">
          <div className="relative h-44 overflow-hidden rounded-sm hover:-translate-y-2  duration-300  ">
            <img
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800"
              alt=""
              className="w-full h-full object-cover "
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/55 py-3 text-center">
              <p className="text-white font-bold text-lg">Men's Fashion</p>
            </div>
          </div>
          <div className=" relative h-44 rounded-sm overflow-hidden hover:-translate-y-2  duration-300  ">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
              alt="Women's Fashion"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 text-center bg-black/55 py-3  ">
              <p className="text-white font-bold text-lg  ">Women's Fashion</p>
            </div>
          </div>
          <div className=" relative h-44 rounded-sm overflow-hidden hover:-translate-y-2  duration-300  ">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
              alt="Footwear"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 text-center bg-black/55 py-3  ">
              <p className="text-white font-bold text-lg  ">Footwear</p>
            </div>
          </div>
          <div className=" relative h-44 rounded-sm overflow-hidden hover:-translate-y-2  duration-300  ">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800"
              alt="Accessories"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 text-center bg-black/55 py-3  ">
              <p className="text-white font-bold text-lg  ">Accessories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by features */}

      <div>
        <div className="flex items-center gap-5 px-12 mt-10 mb-5">
          <div className="h-px bg-black flex-1"></div>

          <h2 className="text-2xl font-bold text-[#172b4d]">
            Featured Products
          </h2>

          <div className="h-px bg-black flex-1"></div>
        </div>

        <div className="grid grid-cols-4 gap-4 px-12">
          <div>
            <div className="relative h-44 overflow-hidden rounded-t-lg ">
              <img
                src="https://assets.ajio.com/medias/sys_master/root1/20260204/l7kA/698329d6cbfa0d5608c0364d/-473Wx593H-702858995-blue-MODEL.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 duration-500 "
              />
            </div>
            <div className="bg-slate-200  px-5 pt-2 pb-5 mb-10 rounded-b-lg">
              <p className="text-black  text-xl font-medium text-center">
                Denim Jacket
              </p>
              <p className="text-black font-bold text-lg text-center pt-4">
                ₹2,500
              </p>
              <button className="block text-white font-medium  px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          <div>
            <div className="relative h-44 overflow-hidden rounded-t-lg ">
              <img
                src="https://tohl.in/cdn/shop/files/LAURENWOMEN_SSHOULDERBAG-BLACK1.jpg?v=1776673318&width=1500"
                alt=""
                className="w-full h-full object-cover hover:scale-105 duration-500 "
              />
            </div>
            <div className="bg-slate-200 px-5 pt-2 pb-5 mb-10 rounded-b-lg">
              <p className="text-black  text-xl font-medium text-center">
                Leather Tote Bag
              </p>
              <p className="text-black font-bold text-lg text-center pt-4">
                ₹1,250
              </p>
              <button className="block text-white font-medium px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          <div>
            <div className="relative h-44 overflow-hidden rounded-t-lg ">
              <img
                src="https://image.made-in-china.com/202f0j00eFrkvKTBrMui/Vintage-Casual-Sports-Training-Shoes-Sneaker-Men-Loafers-Custom-Summer-Casual-Sneakers.webp"
                alt=""
                className="w-full h-full object-cover hover:scale-105 duration-300 "
              />
            </div>
            <div className="bg-slate-200 px-5 pt-2 pb-5 mb-10 rounded-b-lg">
              <p className="text-black  text-xl font-medium text-center">
                Casual Sneakers
              </p>
              <p className="text-black font-bold text-lg text-center pt-4">
                ₹3,600
              </p>
              <button className="block text-white font-medium px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          <div>
            <div className="relative h-44 overflow-hidden rounded-t-lg ">
              <img
                src="https://d3muc2kgcen4ha.cloudfront.net/storage/Series/June2025/HomeImage26062025160015.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 duration-300 "
              />
            </div>
            <div className="bg-slate-200 px-5 pt-2 pb-5 mb-10 rounded-b-lg">
              <p className="text-black  text-xl font-medium text-center">
                Citizen Pro-Master Watch{" "}
              </p>
              <p className="text-black font-bold text-lg text-center pt-4">
                ₹12,000
              </p>
              <button className="block text-white font-medium px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
