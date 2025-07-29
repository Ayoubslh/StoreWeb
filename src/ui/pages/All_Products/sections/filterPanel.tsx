import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export interface FilterState {
  name: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  brands: string[];
  types: string[]; 
}

interface Props {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

const allBrands = ["Apple", "Samsung", "Google"];
const allTypes = ["phone", "accessory"]; // ✅ New categories

export default function FiltersPanel({ filters, setFilters }: Props) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setFilters(localFilters);
  }, [localFilters]);

  const toggleBrand = (brand: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const toggleType = (type: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg shadow-sm bg-white">
      {/* Search */}
      <div>
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="Name..."
          value={localFilters.name}
          onChange={(e) =>
            setLocalFilters({ ...localFilters, name: e.target.value })
          }
        />
      </div>

      {/* Price Range */}
      <div>
        <Label>
          Price (${localFilters.minPrice} - ${localFilters.maxPrice})
        </Label>
        <Slider
          min={0}
          max={2000}
          step={50}
          defaultValue={[localFilters.minPrice, localFilters.maxPrice]}
          onValueChange={([min, max]) =>
            setLocalFilters({ ...localFilters, minPrice: min, maxPrice: max })
          }
          className="mt-3"
        />
      </div>

      {/* Minimum Rating */}
      <div>
        <Label>Minimum Rating ({localFilters.minRating}★)</Label>
        <Slider
          min={0}
          max={5}
          step={0.5}
          defaultValue={[localFilters.minRating]}
          onValueChange={([rating]) =>
            setLocalFilters({ ...localFilters, minRating: rating })
          }
          className="mt-3"
        />
      </div>

      {/* Brands Filter */}
      <div>
        <Label>Brands</Label>
        <div className="space-y-2 mt-2">
          {allBrands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={brand}
                checked={localFilters.brands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <label htmlFor={brand} className="text-sm">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <Label>Categories</Label>
        <div className="space-y-2 mt-2">
          {allTypes.map((type) => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox
                id={type}
                checked={localFilters.types.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <label htmlFor={type} className="text-sm capitalize">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
