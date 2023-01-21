import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProduct, addProduct } from "api/firebase";

const useProducts = () => {
  const client = useQueryClient();

  const getProductQuery = useQuery(["products"], () => getProduct(), {
    staleTime: 1000 * 60,
  });

  const addProductMutation = useMutation((product, url) => addProduct(product, url), {
    onSuccess: () => {
      client.invalidateQueries(["products"]);
    },
  });
  return { getProductQuery, addProductMutation };
};

export default useProducts;
