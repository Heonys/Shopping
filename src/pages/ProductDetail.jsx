import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "antd";
import useCart from "hooks/useCart";

const ProductDetail = () => {
  const {
    state: product,
    state: { title, price, options, tag, url },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  // const [success, setSuccess] = useState(null);
  const { addOrUpdateCartMutation } = useCart();

  const selectHandler = (e) => {
    setSelected(e.target.value);
  };

  const clickHandler = () => {
    const updateProduct = { ...product, options: selected, quantity: 1 };

    addOrUpdateCartMutation.mutate(updateProduct);
  };

  return (
    <>
      <div className="mx-12 text-gray-400 mt-4">
        {">"}
        {tag}
      </div>

      <section className="p-4  flex flex-col md:flex-row justify-center">
        <img className=" px-4 basis-[30%] " src={url.url} alt="detailImage" />
        <div className="flex flex-col basis-[30%] ml-3 ">
          <p className="text-3xl font-bold py-2 ">{title}</p>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">{price} 원</p>

          <div className="flex items-center">
            <label htmlFor="select" className="font-bold text-red-400">
              옵션
            </label>
            <select
              id="select"
              className="p-2 m-4 flex-1 border-2 border-dashed border-red-400 outline-none"
              onChange={selectHandler}
              value={selected}
            >
              {options &&
                options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
            </select>
          </div>

          <Button className="bg-red-400 text-white font-bold" onClick={clickHandler}>
            장바구니 추가
          </Button>

          {/* {success && <div className="text-red-400 text-center font-bold">{success}</div>} */}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
