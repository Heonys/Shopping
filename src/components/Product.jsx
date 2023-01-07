import { getAllProduct } from "api/firebase";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    getAllProduct().then((res) => setProductList(Object.values(res)));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {productList &&
          productList.map((item, index) => {
            return <ProductCard key={index} data={item} />;
          })}
      </div>
    </>
  );
};

export default Product;
