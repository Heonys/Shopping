import React from "react";

const ProductCard = () => {
  return (
    <section className="flex justify-between px-5 ">
      <img className="" src="/asset/shoes1.jpg" alt="" />
      <div>
        <div>타이틀</div>
        <div>가격</div>
        <div>태그</div>
        <div>옵션</div>
      </div>
    </section>
  );
};

export default ProductCard;
