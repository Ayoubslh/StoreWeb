import { useState, useEffect } from "react";
import ProductCard from "@/ui/comps/ProductCard";
import FiltersPanel, { type FilterState } from "./sections/filterPanel";
import { useGetAllItems } from "@/apis/items/GetAllItems";
import { useSearchParams } from "react-router-dom";

// Extended Filter State
type ExtendedFilterState = FilterState & {
  types: string[];
};

export default function AllProductsPage() {
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState<ExtendedFilterState>({
    name: "",
    brands: [],
    minPrice: 0,
    maxPrice: 2000,
    minRating: 0,
    types: [],
  });

  // Initialize filters from URL params only once
  useEffect(() => {
    const initialBrand = searchParams.get("brand");
    const initialType = searchParams.get("category");
    const initialRating = searchParams.get("rating");

    setFilters((prev) => ({
      ...prev,
      brands: initialBrand ? [initialBrand] : [],
      types: initialType ? [initialType] : [],
      minRating: initialRating ? parseFloat(initialRating) : 0,
    }));
  }, [searchParams]);

  const { data: mockProducts = [], isLoading } = useGetAllItems(filters);

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
    const matchesRating = product.averageRatings >= filters.minRating;

    return (
      matchesName && matchesBrand && matchesType && matchesPrice && matchesRating
    );
  });

  return (
    <section className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Filters Panel */}
        <aside className="w-full lg:w-1/4">
          <FiltersPanel filters={filters} setFilters={setFilters} />
        </aside>

        <main className="w-full">
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
