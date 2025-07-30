import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import ProductCard from "@/ui/comps/ProductCard";
import type { PhoneDetails } from "@/Types/phone";
import { useFavouriteStore } from "@/store/useFavouritesStore";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";



export default function FavouritesPage() {
  const favouritePhones = useFavouriteStore((state) => state.items);
 const [favourite, setFavourite] = useState(() =>
    favouritePhones.map((item) => ({ ...item, selected: true }))
  );
  useEffect(() => {
    setFavourite((prev) => {
      const updated = favouritePhones.map((item) => {
        const prevItem = prev.find((p) => p._id === item._id);
        return {
          ...item,
          selected: prevItem ? prevItem.selected : true,
        };
      });
      return updated;
    });
  }, [favouritePhones]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-10"
    >
      <div className="flex items-center gap-2 mb-4">
        <FaHeart className="text-primary text-2xl" />
        <h1 className="text-2xl font-bold">My Favourites ({favouritePhones.length})</h1>
      </div>

      <hr className="border-t border-gray-300 mb-6" />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favouritePhones.length === 0 ? (
          <p className="text-gray-500 text-lg text-center col-span-full">
            You haven't added any favorites yet.
          </p>
        ) : (
          favouritePhones.map((phone) => (
            <ProductCard key={phone._id} item={phone} />
          ))
        )}
      </div>
    </motion.div>
  );
}
