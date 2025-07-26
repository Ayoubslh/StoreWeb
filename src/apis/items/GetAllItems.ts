import { useQuery } from "@tanstack/react-query";
import type { PhoneDetails } from "@/Types/phone";
export type FiltersType = {
  brand?: string;
  model?: string;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  minStorage?: number;
  maxStorage?: number;
  minRam?: number;
  maxRam?: number;
};

const fetchAllItems = async (filters: FiltersType) => {
  const params = new URLSearchParams();

  // Basic filters
  if (filters.brand) params.append("brand", filters.brand);
  if (filters.model) params.append("model", filters.model);
  if (filters.name) params.append("name", filters.name);

  // Range filters
  if (filters.minPrice !== undefined) params.append("price[gte]", filters.minPrice.toString());
  if (filters.maxPrice !== undefined) params.append("price[lte]", filters.maxPrice.toString());


  console.log("Fetching items with filters:", params.toString());





  const response = await fetch(`https://hptec.onrender.com/api/v1/items?${params.toString()}`, {
    method: "GET",
  });
    console.log("Response status:", response.status);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  const json = await response.json();
  return json.data.items as PhoneDetails[];
};

export const useGetAllItems = (filters: FiltersType) => {
  return useQuery<PhoneDetails[], Error>({
    queryKey: ["items", filters], 
    queryFn: () => fetchAllItems(filters),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1, 
  });
};