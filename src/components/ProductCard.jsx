import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/product/3");
  };

  return (
    <>
      <div className="w-full cursor-pointer" onClick={clickHandler}>
        <img className="mb-2" src="/assets/1.webp" alt="" />
        <p className="text-sm mb-1">GOLD COTTON WEEED 드레스</p>
        <div className="flex justify-between text-sm p-1">
          <p className="text-gray-400">여성</p>
          <p className="">219,000원</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
