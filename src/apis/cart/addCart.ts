import { useMutation } from "@tanstack/react-query";
import { getUserToken } from "@/helper/getToken";

import { useUserStore } from "@/store/useUser";
export type CartItem = {
  product: string;
  quantity: number;
};

export type CartItems = CartItem[];



const addCartItem = async (items: CartItems): Promise<CartItems> => {
    const token= getUserToken();
    console.log(items)

  console.log("user authenticated:", useUserStore.getState().isAuthenticated);
  if (!token) {
    throw new Error("User not authenticated");
  }

  const response = await fetch(`https://hptec.onrender.com/api/v1/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(items),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to cart");
  }

  return response.json();
};

export const useAddCartItem = () => {
  return useMutation<CartItems, Error, CartItems>({
    mutationFn: addCartItem,
    onSuccess: (data) => {
      console.log("Item added to cart:", data);
    },
    onError: (error) => {
      // Handle error, e.g., show notification
      console.error("Error adding item to cart:", error);
    },
  });
};

