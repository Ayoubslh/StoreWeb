 import { useMutation } from "@tanstack/react-query";
import { getUserToken } from "@/helper/getToken";
import { toast } from "sonner";

import type { PhoneDetails } from "@/Types/phone";



const addFavourite = async(id :string):Promise<PhoneDetails>=>{
    
    const response = await fetch(`https://hptec.onrender.com/api/v1/favourites/`, {
        method: "POST",
       headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getUserToken()}`, // Assuming you store the token in localStorage
    },
        body: JSON.stringify({ items: [id] })  
    });

    if (!response.ok) {
        toast.error("Failed to add favourite");
        throw new Error("Failed to add favourite");
    }

    const data = await response.json();
    toast.success("Favourite added successfully");
    return data;
}

export const useAddFavourite = () =>{
    return useMutation<PhoneDetails, Error, string>({
        mutationFn: addFavourite,
        onSuccess: () => {
            toast.success("Favourite added successfully");
        },
        onError: () => {
            toast.error("Failed to add favourite");
        }
    });
}
