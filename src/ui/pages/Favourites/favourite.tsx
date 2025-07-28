import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import ProductCard from "@/ui/comps/ProductCard";
import type { PhoneDetails } from "@/Types/phone";

const favouritePhones: PhoneDetails[] = [
  {
    _id: "1",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    image:
      "https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/lifestyle/-1024w2/gsmarena_001.jpg",
    price: 1399,
    ratingAverage: 4.7,
    ratingQuantity: 1034,
    specs: {},
  },
  {
    _id: "2",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    price: 1299,
    ratingAverage: 4.8,
    ratingQuantity: 2043,
    specs: {},
  },
  {
    _id: "3",
    name: "OnePlus 12",
    brand: "OnePlus",
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg",
    price: 899,
    ratingAverage: 4.6,
    ratingQuantity: 810,
    specs: {},
  },
];

export default function FavouritesPage() {
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
