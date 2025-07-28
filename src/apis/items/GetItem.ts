    import { useQuery } from "@tanstack/react-query";
    import type { PhoneDetails } from "@/Types/phone";


    const fetchItem = async (id:string) => {
    const response = await fetch(`https://hptec.onrender.com/api/v1/items/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch items");
    }
    
    const json = await response.json();
    return json.data as PhoneDetails;
    };

    export const useGetItem = (id:string) => {
    return useQuery<PhoneDetails, Error>({
        queryKey: ["items",id],
        queryFn:()=> fetchItem(id),
        staleTime: 1000 * 60 * 5, 
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    };