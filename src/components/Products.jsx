import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "hooks/useProducts";

const Products = () => {
  const {
    getProductQuery: { data, isLoading, error },
  } = useProducts();

  return (
    <div>
      {isLoading && <div>로딩중 입니다...</div>}
      {error && <div>error page</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4 gap-4">
        {data &&
          data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Products;
