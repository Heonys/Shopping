import React from "react";
import ProductCard from "./ProductCard";
import useProduct from "hooks/useProducts";

const Product = () => {
  const {
    getAllProducts: { isLoading, data: products, error },
  } = useProduct();

  return (
    <>
      {isLoading && <div>로딩중 ... </div>}
      {error && <div>에러 </div>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default Product;
