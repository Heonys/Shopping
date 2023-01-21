import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart, addOrUpdateCart, removeCart } from "api/firebase";
import { useAuth } from "context/useAuth";

const useCart = () => {
  const { uid } = useAuth();
  const client = useQueryClient();

  const getCartQuery = useQuery(["cart", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateCartMutation = useMutation((product) => addOrUpdateCart(product, uid), {
    onSuccess: () => {
      client.invalidateQueries(["cart", uid]);
    },
  });

  const removeCartMutation = useMutation((product) => removeCart(product, uid), {
    onSuccess: () => {
      client.invalidateQueries(["cart", uid]);
    },
  });

  return { getCartQuery, addOrUpdateCartMutation, removeCartMutation };
};

export default useCart;
