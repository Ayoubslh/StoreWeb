import { useMutation } from "@tanstack/react-query";
import type { order } from "@/Types/OrderTypes";
import getUserToken from "@/helper/getToken";
import { useOrderStore } from "@/store/useOrderStore";
import { toast } from "sonner";


const addOrder = async (newOrder: order) => {
  const response = await fetch("https://hptec.onrender.com/api/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getUserToken()}`, // Assuming you store the token in localStorage
    },
    body: JSON.stringify(newOrder),
  });

  if (!response.ok) {
    throw new Error("Failed to add order");
  }

  const data = await response.json();
  return data as order; // Return the newly created order
};

export const useAddOrder = () => {
  return useMutation({
    mutationFn: addOrder,
    onSuccess: (data) => {
      const addOrderToStore = useOrderStore.getState().addOrder;
      addOrderToStore(data); // Add the new order to Zustand store
      toast('Order Added Successfully', {
        description: "Your order has been placed successfully.",
        dismissible: true,
      });
    },
    onError: (error) => {
      toast('Error Adding Order', {
        description: error.message,
        dismissible: true,
      });
    },
  });
};
