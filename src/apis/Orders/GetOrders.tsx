import { useQuery } from "@tanstack/react-query";
import type { order } from "@/Types/OrderTypes";
import getUserToken from "@/helper/getToken";

const fetchOrders = async () => {
  const response = await fetch("https://hptec.onrender.com/api/v1/orders", {
    method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${getUserToken()}`, // Assuming you store the token in localStorage
  },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data as order[]; 
};

export const useOrders = () => {
  return useQuery<order[], Error>({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    staleTime: 1000 * 60 *10 ,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1,
  });
};
