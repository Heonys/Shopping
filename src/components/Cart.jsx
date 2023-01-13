import React from "react";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import { Button } from "antd";
import useCarts from "hooks/useCarts";

const SHIPPING = 3000;

const Cart = () => {
  const {
    cartQuery: { isLoading, data },
    addOrUpdateCartMutation,
    deleteCartMutation,
  } = useCarts();

  const hasProduct = data && data.length > 0;
  const totalProducts =
    data &&
    data.reduce((acc, cur) => acc + parseInt(cur.price) * cur.quantity, 0);

  const onPlus = (id) => {
    const product = data.filter((row) => row.id === id);

    addOrUpdateCartMutation.mutate({
      ...product[0],
      quantity: product[0].quantity + 1,
    });
  };

  const onMinus = (id) => {
    const product = data.filter((row) => row.id === id);
    if (product[0].quantity < 2) return;
    addOrUpdateCartMutation.mutate({
      ...product[0],
      quantity: product[0].quantity - 1,
    });
  };

  const onDelete = (id) => {
    deleteCartMutation.mutate(id).then(() => {});
  };

  return (
    <section className="p-8 flex flex-col">
      <div className="text-lg font-semibold py-3 text-center border-b-2 border-[#ddd]">
        내 장바구니
      </div>
      {isLoading && <p>로딩중입니다...</p>}
      {!hasProduct && <p>장바구니에 상품이없습니다</p>}
      {hasProduct &&
        data.map((row, index) => {
          console.log(row);
          return (
            <div className="flex pt-2 px-10 space-x-3" key={index}>
              <img className="h-[250px] mb-2" src={row.image} alt="" />
              <div className="w-full flex justify-between px-2">
                <div className="flex flex-col justify-center">
                  <p className="text-sm mb-1">{row.title}</p>
                  <p className="text-gray-400">{row.options}</p>
                  <p className="">{row.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <AiOutlineMinusSquare onClick={() => onMinus(row.id)} />
                  <p>{row.quantity}</p>
                  <AiOutlinePlusSquare onClick={() => onPlus(row.id)} />
                  <BsFillTrashFill onClick={() => onDelete(row.id)} />
                </div>
              </div>
            </div>
          );
        })}

      <div className="p-8 mx-2 flex justify-between items-center border-t-2 rounded-2xl text-center text-lg bg-gray-50 border-[#ddd]  pb-10">
        <div className="p-2 shrink-0">
          <div>상품총액</div>
          <div className="font-bold text-red-500 text-xl md:text-2xl">
            {totalProducts}원
          </div>
        </div>

        <div className="flex items-center">
          <AiFillPlusCircle />
        </div>
        <div className="p-2 shrink-0">
          <div>배송비</div>
          <div className="font-bold text-red-500 text-xl md:text-2xl">
            {SHIPPING}원
          </div>
        </div>

        <div className="flex items-center">
          <FaEquals />
        </div>
        <div className="p-2 shrink-0">
          <div>총 가격</div>
          <div className="font-bold text-red-500 text-xl md:text-2xl">
            {totalProducts + SHIPPING}원
          </div>
        </div>
      </div>

      <Button type="primary" danger className=" text-white font-bold text-lg">
        주문하기
      </Button>
    </section>
  );
};

export default Cart;
