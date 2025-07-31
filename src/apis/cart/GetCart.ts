 import { useQuery } from "@tanstack/react-query";
import type { CartType} from "@/Types/CartTypes";
import { useUserStore } from "@/store/useUser";
import { getUserToken } from "@/helper/getToken";



export const getCart = async (): Promise<CartType> => {
    const token = getUserToken();
  const response = await fetch(`https://hptec.onrender.com/api/v1/cart/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart items");
  }
    const data = await response.json();

  return data ;
};

export const cartQuery = () => {
  return useQuery<CartType>({
    queryKey: ["cart"],
    queryFn: () => getCart(),
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes

  }

);
};