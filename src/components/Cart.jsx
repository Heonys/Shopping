import React, { useEffect, useState } from "react";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import { Button } from "antd";
import { getCart } from "api/firebase";
import { useAuth } from "context/AuthContext";
import { useCart } from "context/CartContext";

const Cart = () => {
  const { user } = useAuth();
  const [cartList, setCartList] = useState();
  const { setCount } = useCart();

  useEffect(() => {
    getCart(user).then((res) => {
      res &&
        setCartList(
          Object.values(res).map((value) => {
            return { ...value, count: 1 };
          })
        );
    });
  }, [user]);

  const onPlus = (index) => {
    console.log(index);
  };

  const onMinus = (index) => {
    console.log(index);
  };

  const onDelete = () => {};

  return (
    <section>
      <div className="text-lg font-semibold py-3 text-center border-b-2 border-[#ddd]">
        내 장바구니
      </div>
      {cartList &&
        cartList.map((row, index) => {
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
                  <AiOutlineMinusSquare onClick={() => onPlus(index)} />
                  <p>{row.count}</p>
                  <AiOutlinePlusSquare onClick={() => onMinus(index)} />
                  <BsFillTrashFill onClick={onDelete} />
                </div>
              </div>
            </div>
          );
        })}

      <div className="py-3 border-t-2 border-[#ddd] flex justify-evenly pb-10">
        <div className="p-2">
          <div>상품총액</div>
          <div>30,000 원</div>
        </div>

        <div className="flex items-center">
          <AiFillPlusCircle />
        </div>
        <div>
          <div>배송비</div>
          <div>6,000 원</div>
        </div>

        <div className="flex items-center">
          <FaEquals />
        </div>
        <div>
          <div>총 가격</div>
          <div>36,000 원</div>
        </div>
      </div>

      <Button
        type="primary"
        danger
        className="w-full h-9 mb-20 text-white font-bold text-lg"
      >
        주문하기
      </Button>
    </section>
  );
};

export default Cart;
