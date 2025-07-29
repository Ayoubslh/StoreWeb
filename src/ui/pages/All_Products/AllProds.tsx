import { useState } from "react";
import ProductCard from "@/ui/comps/ProductCard";
import FiltersPanel, { type FilterState } from "./sections/filterPanel";


const mockProducts = [
  {
    _id: "1",
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 999,
    rating: 4.8,
    image: "/images/iphone14pro.png",   
    category: "phone",
  description: "Latest Apple iPhone with A16 chip and Pro camera system.",
  averageRatings: 4.8,
  ratingQuantity: 100,
  },
  {
    _id: "2",
    name: "Galaxy Buds 2",
    brand: "Samsung",
    price: 149,
    rating: 4.2,
    image: "/images/galaxybuds2.png",
     category: "accessory",
    description: "Wireless earbuds with active noise cancellation.",
    averageRatings: 4.2,
    ratingQuantity: 50,
  },
  {
    _id: "3",
    name: "Pixel 8",
    brand: "Google",
    price: 899,
    rating: 4.6,
    image: "/images/pixel8.png",
     category: "phone",
    description: "Latest Google Pixel with advanced AI features.",
    averageRatings: 4.6,
    ratingQuantity: 75,
  },
  {
    _id: "4",
    name: "MagSafe Charger",
    brand: "Apple",
    price: 49,
    rating: 3.9,
    image: "/images/magsafe.png",
     category: "accessory",
    description: "MagSafe Charger for fast wireless charging.",
    averageRatings: 3.9,
    ratingQuantity: 25,
  },
];

// Update FilterState to include type filter
type ExtendedFilterState = FilterState & {
  types: string[]; // e.g., ["phone", "accessory"]
};

export default function AllProductsPage() {
  const [filters, setFilters] = useState<ExtendedFilterState>({
    name: "",
    brands: [],
    minPrice: 0,
    maxPrice: 2000,
    minRating: 0,
    types: [], // Default: no filter
  });

  const filteredProducts = mockProducts.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const matchesBrand =
      filters.brands.length === 0 || filters.brands.includes(product.brand);
    const matchesType =
      filters.types.length === 0 || filters.types.includes(product.category);
    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesRating = product.rating >= filters.minRating;

    return (
      matchesName && matchesBrand && matchesType && matchesPrice && matchesRating
    );
  });

  return (
    <section className="max-w-7xl mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <div className="w-full flex flex-col lg:flex-row gap-6">   
        {/* Filters Panel */}
        <aside className="w-full lg:w-1/4">
          <FiltersPanel filters={filters} setFilters={setFilters} />
        </aside>

      
        <main className="w-full ">
          {filteredProducts.length > 0 ? (
        <div className="grid w-full gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          
  {filteredProducts.map((product) => (
    <ProductCard key={product._id} item={product} />
  ))}
</div>

          ) : (
            <div className="text-center text-gray-500 mt-10">
              No products match your filters.
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
