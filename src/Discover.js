import React from "react";

const Discover = () => {
  return (
    <div className="bg-black">
      <div className="text-center text-8xl  text-white ">
        <h1 className=" py-32 font-bold">
          Discover story-worthy<br></br>
          travel moments
        </h1>
      </div>

      <div className="flex text-3xl text-white">
        <div className=" w-1/3 ">
          <h1 className="ml-5">
            The top 17 things <br />
            you cant miss in <br />
            Barcelona
          </h1>
        </div>
        <div className=" w-1/3 ">
          <h1 className="ml-5">
            When is the best
            <br />
            time to visit
            <br />
            Ecuador
          </h1>
        </div>
        <div className=" w-1/3 ">
          <h1 className="ml-5">
            6 of the best road
            <br />
            trips in Italy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Discover;
