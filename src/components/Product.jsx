import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <>
      <div className="relative w-full h-[40%] mb-3">
        <img
          className="object-cover w-full h-full opacity-75"
          src="assets/banner.jpg"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 text-white translate-x-[-50%] translate-y-[-50%]">
          <p className="text-5xl text-center">Shop With Us</p>
          <p className="text-center">Best Products, High Quelity</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return <ProductCard key={index} />;
        })}
      </div>
    </>
  );
};

export default Product;
