import React from "react";

const ProductCard = ({ product: { title, price, options, tag, url } }) => {
  return (
    <section className="flex justify-between px-5 ">
      <img className="" src={url.url} alt="" />
      <div>
        <div>{title}</div>
        <div>{price}</div>
        <div>{tag}</div>
        <div>{options}</div>
      </div>
    </section>
  );
};

export default ProductCard;
