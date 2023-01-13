import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, getAllProduct } from "api/firebase";

const useProduct = () => {
  const queryClient = useQueryClient();

  const getAllProducts = useQuery(["products"], getAllProduct, {
    staleTime: 1000 * 60,
  });

  const addMutation = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: queryClient.invalidateQueries(["products"]),
    }
  );

  return { getAllProducts, addMutation };
};

export default useProduct;
