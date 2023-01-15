import React from "react";
import Products from "components/Products";

const Home = () => {
  return (
    <>
      <div className="relative w-full bg-yellow-300 h-80 mb-3">
        <div className="bg-contain w-full h-full bg-banner opacity-80"></div>
        <div className="absolute top-[40%] w-full text-center text-gray-100 drop-shadow-md">
          <h1 className="text-6xl font-bold">CherryPick</h1>
          <h2 className="text-2xl font-semibold ">High quility shoes</h2>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
