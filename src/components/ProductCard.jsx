import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { category, id, image, price, title } = data;
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="w-full cursor-pointer" onClick={clickHandler}>
        <img className="mb-2" src={image} alt="" />
        <p className="text-sm mb-1">{title}</p>
        <div className="flex justify-between text-sm p-1">
          <p className="text-gray-400">{category}</p>
          <p className="">{price}원</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
