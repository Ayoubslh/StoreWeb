import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import type { PhoneDetails } from "@/Types/phone";
import { FaCartPlus, FaHeartCirclePlus } from "react-icons/fa6";

function VCard({ item }: { item: PhoneDetails }) {
  return (
    <Card className=" sm:w-[200px] md:w-[250px]  bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-2">
      
      <CardHeader className="flex justify-center">
        <div className="w-full aspect-[4/3]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-base md:text-lg lg:text-xl font-bold line-clamp-1">
          {item.name}
        </CardTitle>
        <p className="text-xs md:text-sm text-gray-500">{item.brand}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center mt-2">
        <p className="text-sm md:text-base lg:text-xl font-semibold">${item.price}</p>
        <div className="flex gap-2">
          <Button
            aria-label="Add to cart"
            className="bg-primary p-2 text-white hover:bg-white hover:text-primary border border-primary"
          >
            <FaCartPlus className="text-xl md:text-2xl" />
          </Button>
          <Button
            aria-label="Add to favorites"
            className="bg-primary p-2 text-white hover:bg-white hover:text-primary border border-primary"
          >
            <FaHeartCirclePlus className="text-xl md:text-2xl" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default VCard;
