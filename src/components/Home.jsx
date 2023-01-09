import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="relative w-full bg-yellow-700 h-96 mb-3">
        <div className="bg-cover w-full h-full bg-banner opacity-80"></div>
        <div className="absolute w-full text-center drop-shadow-2xl top-32 text-white ">
          <p className="text-6xl ">Shop With Us</p>
          <p className="text-2xl ">Best Products, High Quelity</p>
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
