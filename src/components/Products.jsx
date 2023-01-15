import React from "react";
import ProductCard from "./ProductCard";
import { getProduct } from "api/firebase";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, isLoading, error } = useQuery(["products"], () => {
    return getProduct();
  });

  return (
    <div>
      {isLoading && <div>로딩중 입니다...</div>}
      {error && <div>error page</div>}
      {data &&
        data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Products;
