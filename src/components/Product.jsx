import React from "react";
import { getAllProduct } from "api/firebase";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getAllProduct);

  return (
    <>
      {isLoading && <div>로딩중 ... </div>}
      {error && <div>에러 </div>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })}
      </div>
    </>
  );
};

export default Product;
