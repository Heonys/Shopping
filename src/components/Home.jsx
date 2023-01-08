import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="relative h-96 mb-3">
        <img
          className="object-cover bg-black w-full h-full opacity-75"
          // src="assets/banner.jpg"
          alt=""
        />
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
