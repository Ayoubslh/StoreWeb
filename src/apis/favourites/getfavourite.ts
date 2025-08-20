import { useQuery } from "@tanstack/react-query";
import { getUserToken } from "@/helper/getToken";
import { toast } from "sonner";

import type { PhoneDetails } from "@/Types/phone";



const getFavourites = async (): Promise<PhoneDetails[]> => {

    const response = await fetch(`https://hptec.onrender.com/api/v1/favourites/`, {
        method: "GET",
      headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getUserToken()}`, // Assuming you store the token in localStorage
    },
    });

    if (!response.ok) {
        toast.error("Failed to fetch favourites");
        throw new Error("Failed to fetch favourites");
    }

    const data = await response.json();
    return data.data.favourites.items;
}

export const useGetFavourites = () => {
    return useQuery<PhoneDetails[]>({
        queryKey: ["favourites"],
        queryFn: getFavourites,
        staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    });
};
