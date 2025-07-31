import { FaHeart } from "react-icons/fa";
import { FaHeartCrack } from "react-icons/fa6";
import ProductCard from "@/ui/comps/ProductCard";
import { useFavouriteStore } from "@/store/useFavouritesStore";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useUserStore } from "@/store/useUser";

export default function FavouritesPage() {
  const navigate = useNavigate();

  const isLoggedIn = useUserStore((state) => state.isAuthenticated);
  console.log("Is user logged in:", isLoggedIn);

  const favouritePhones = useFavouriteStore((state) => state.items);
  const [favourite, setFavourite] = useState(() =>
    favouritePhones.map((item) => ({ ...item, selected: true }))
  );

  useEffect(() => {
      if (!isLoggedIn) {
    navigate('/login');
    return
  }
    setFavourite((prev) => {
      return favouritePhones.map((item) => {
        const prevItem = prev.find((p) => p._id === item._id);
        return {
          ...item,
          selected: prevItem ? prevItem.selected : true,
        };
      });
    });
  }, [favouritePhones]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-4">
        <FaHeart className="text-brand-primary text-2xl" />
        <h1 className="text-2xl font-bold">
          My Favourites ({favouritePhones.length})
        </h1>
      </div>

      <hr className="border-t border-gray-300 mb-6" />

      {favouritePhones.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <FaHeartCrack className="text-6xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">No Favourites Yet</h2>
          <p className="text-gray-500 mt-2 max-w-md">
            You haven't added any favourites yet. Browse products and click the heart icon to save them here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favourite.map((phone) => (
            <ProductCard key={phone._id} item={phone} />
          ))}
        </div>
      )}
    </div>
  );
}
