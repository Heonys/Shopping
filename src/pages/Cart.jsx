import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import useCart from "hooks/useCart";

const ICON_CLASS = "transition-all cursor-pointer hover:scale-105 hover:text-red-500 mx-1";

const Cart = () => {
  const {
    getCartQuery: { data, isLoading },
    addOrUpdateCartMutation,
    removeCartMutation,
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProduct = data && data.length > 0;

  const handlePuls = (product) => {
    addOrUpdateCartMutation.mutate({ ...product, quantity: product.quantity + 1 });
  };
  const handleMinus = (product) => {
    if (product.quantity > 1) {
      addOrUpdateCartMutation.mutate({ ...product, quantity: product.quantity - 1 });
    }
  };
  const handleDelete = (product) => {
    removeCartMutation.mutate(product);
  };

  const totalPrice = data && data.reduce((acc, cur) => acc + parseInt(cur.price) * cur.quantity, 0);

  return (
    <>
      <div className="p-8 flex flex-col">
        <div className="border-b border-gray-300 font-bold text-2xl text-center p-5">
          내 장바구니
        </div>
        {!hasProduct && <p>장바구니에 상품이 없습니다</p>}
        {hasProduct && (
          <>
            <ul className="border-b border-gray-300  p-5 px-8">
              {data &&
                data.map((product) => {
                  const { id, title, price, options, url, quantity } = product;
                  return (
                    <li key={id} className="flex justify-between items-center my-2 px-5">
                      <img className="w-24 md:w-48 rounded-lg" src={url.url} alt="carImage" />

                      <div className="flex flex-1 justify-between items-center ml-4">
                        <div className="">
                          <div className="text-lg">{title}</div>
                          <div className="text-lg font-bold">{options}</div>
                          <div className="">{price}</div>
                        </div>
                        <div className="flex items-center text-lg">
                          <AiOutlineMinusCircle
                            className={ICON_CLASS}
                            onClick={() => handleMinus(product)}
                          />
                          <div>{quantity}</div>
                          <AiOutlinePlusCircle
                            className={ICON_CLASS}
                            onClick={() => handlePuls(product)}
                          />
                          <BsFillTrashFill
                            className={ICON_CLASS}
                            onClick={() => handleDelete(product)}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>

            <div className="flex justify-between items-center px-2 mb-4">
              <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
                <div>상품가격</div>
                <p className="font-bold md:text-xl text-red-500">{totalPrice} 원</p>
              </div>
              <AiOutlinePlus />
              <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
                <div>배송비</div>
                <p className="font-bold md:text-xl text-red-500">6000 원</p>
              </div>
              <FaEquals />
              <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
                <div>총가격</div>
                <p className="font-bold md:text-xl text-red-500">{totalPrice + 6000} 원</p>
              </div>
            </div>

            <button className="bg-red-500 font-bold text-lg p-2 text-white">구매하기</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
