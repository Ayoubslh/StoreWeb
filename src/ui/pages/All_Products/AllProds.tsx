import { useState } from "react";
import ProductCard from "@/ui/comps/ProductCard";
import FiltersPanel, { type FilterState } from "./sections/filterPanel";
import { Button } from "@/components/ui/button";

const mockProducts = [
  {
    _id: "1",
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 999,
    rating: 4.8,
    image: "/images/iphone14pro.png",   
    type: "phone",
  },
  {
    _id: "2",
    name: "Galaxy Buds 2",
    brand: "Samsung",
    price: 149,
    rating: 4.2,
    image: "/images/galaxybuds2.png",
    type: "accessory",
  },
  {
    _id: "3",
    name: "Pixel 8",
    brand: "Google",
    price: 899,
    rating: 4.6,
    image: "/images/pixel8.png",
    type: "phone",
  },
  {
    _id: "4",
    name: "MagSafe Charger",
    brand: "Apple",
    price: 49,
    rating: 3.9,
    image: "/images/magsafe.png",
    type: "accessory",
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
      filters.types.length === 0 || filters.types.includes(product.type);
    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesRating = product.rating >= filters.minRating;

    return (
      matchesName && matchesBrand && matchesType && matchesPrice && matchesRating
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <div className="flex flex-col lg:flex-row gap-6  ">
        {/* Filters Panel */}
        <aside className="w-full lg:w-1/4">
          <FiltersPanel filters={filters} setFilters={setFilters} />
        </aside>

        {/* Products Grid */}
        <main className="w-full lg:w-3/4">
          {filteredProducts.length > 0 ? (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(20px,1fr))]">
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
