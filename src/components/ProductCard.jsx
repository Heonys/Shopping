import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  product: { title, price, options, tag, url, id },
}) => {
  const navigate = useNavigate();

  return (
    <section
      className="rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col px-5 transition-all hover:scale-105"
      onClick={() => navigate(`product/${id}`, { state: product })}
    >
      <img className="w-full" src={url.url} alt="" />
      <div className="">
        <div className="px-2 text-md flex justify-between items-center">
          <div className="truncate">{title}</div>
          <div>{price} 원</div>
        </div>
        <div className="px-2 text-sm text-gray-600 mb-1">{tag}</div>
      </div>
    </section>
  );
};

export default ProductCard;
