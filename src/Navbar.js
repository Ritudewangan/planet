import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="flex text-white  py-10 ">
        <div className=" ml-20 ">
          <h1>search</h1>
        </div>
        <div className="flex  text-white text-center ml-96">
          <h1 className="text-2xl">lonely planet</h1>
        </div>
        <div className=" flex space-x-10 ml-44 ">
          <h1>Destinations</h1>
          <h1>Stories</h1>
          <h1>Shop</h1>
          <button className="bg-white text-black font-bold rounded-2xl px-4 py-1 hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
