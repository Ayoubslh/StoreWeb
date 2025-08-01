import ProductCard from "@/ui/comps/ProductCard";
import type { PhoneDetails } from "@/Types/phone";
import { useGetAllItems } from "@/apis/items/GetAllItems";
import { useEffect, useState } from "react";



function Products(filter:any) {
   
const [filters, setFilters] = useState( {
  name: "",
  minPrice: undefined,
  maxPrice: undefined,
  minRating: undefined,
  brands: [],
  types: [],
});
useEffect(() => {
setFilters((prev) => ({ ...prev, ...filter }));
}, [filter]);


    const { data: items, isLoading, error } = useGetAllItems(filters);
    console.log("Items fetched:", items);

    if (isLoading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-6xl text-black">Error loading products</div>;
    if (!items || items.length === 0) return <div className="text-center">No products available</div>;
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {items.map((item: PhoneDetails) => (
                <ProductCard key={item._id} item={item} quantity={1} />
            ))}
        </div>
    );
}

export default Products;


