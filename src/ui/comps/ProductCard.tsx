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
    <Card className="w-60 bg-white rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-3">
      <CardHeader className="flex justify-center">
        <img src={item.image} alt={item.name} className="w-full h-48 object-contain" />
      </CardHeader>

      <CardContent>
        <CardTitle className="text-2xl font-bold line-clamp-1">{item.name}</CardTitle>
        <p className="text-sm text-gray-500">{item.brand}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center mt-2">
        <p className="text-lg text-gray-600">${item.price}</p>
        <div className="flex gap-2">
          <Button aria-label="Add to cart" className="bg-primary p-0 text-white hover:bg-white hover:text-primary border border-primary">
            <FaCartPlus size={60} />
          </Button>
          <Button aria-label="Add to favorites" className="bg-primary p-0 text-white hover:bg-white hover:text-primary border border-primary">
            <FaHeartCirclePlus size={60} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default VCard;
