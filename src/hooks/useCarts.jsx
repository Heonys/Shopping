import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart, deleteCart, addOrUpdateCart } from "api/firebase";
import { useAuth } from "context/AuthContext";

const useCarts = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const cartQuery = useQuery(["carts", user || ""], () => getCart(user), {
    enabled: !!user,
  });

  const addOrUpdateCartMutation = useMutation(
    (product) => addOrUpdateCart(product, user),
    {
      onSuccess: queryClient.invalidateQueries(["carts", user]),
    }
  );

  const deleteCartMutation = useMutation((id) => deleteCart(id, user), {
    onSuccess: queryClient.invalidateQueries(["carts", user]),
  });

  return {
    cartQuery,
    addOrUpdateCartMutation,
    deleteCartMutation,
  };
};

export default useCarts;
