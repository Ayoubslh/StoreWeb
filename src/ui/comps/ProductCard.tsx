import { useState } from "react";
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
import { Link } from "react-router-dom";
import clsx from "clsx";

function VCard({ item }: { item: PhoneDetails }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Link
      to={`/details/${item._id}`}
      className="no-underline"
      role="button"
      tabIndex={0}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <Card
        className={clsx(
          "sm:w-[200px] md:w-[250px] bg-white rounded-2xl shadow-lg transition duration-300 border-2",
          {
            "hover:shadow-xl hover:-translate-y-2 hover:border-primary": true,
            "border-transparent": !isPressed,
            "border-primary shadow-xl scale-[1.03]": isPressed,
          }
        )}
      >
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
              className={clsx(
                "p-2 border text-white transition-colors",
                {
                  "bg-primary hover:bg-white  hover:text-primary border-primary": true,
                  "bg-white text-primary": isPressed,
                }
              )}
            >
              <FaCartPlus className="text-xl md:text-2xl" />
            </Button>
            <Button
              aria-label="Add to favorites"
              className={clsx(
                "p-2 border text-white transition-colors",
                {
                  "bg-primary hover:bg-white hover:text-primary border-primary": true,
                  "bg-white text-primary": isPressed,
                }
              )}
            >
              <FaHeartCirclePlus className="text-lg md:text-2xl" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default VCard;
