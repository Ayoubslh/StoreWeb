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

  const handlePressStart = () => setIsPressed(true);
  const handlePressEnd = () => setIsPressed(false);

  return (
    <Link
      to={`/details/${item._id}`}
      className="no-underline"
      role="button"
      tabIndex={0}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
    >
      <Card
        className={clsx(
          " sm:w-[200px] md:w-[250px] bg-white rounded-2xl shadow-lg transition-transform duration-300 border-2",
          {
            "hover:shadow-xl hover:-translate-y-2 hover:border-primary": !isPressed,
            "border-transparent": !isPressed,
            "border-primary shadow-xl scale-[1.02]": isPressed,
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
          <CardTitle className="text-sm sm:text-base md:text-lg font-bold line-clamp-1">
            {item.name}
          </CardTitle>
          <p className="text-xs text-gray-500">{item.brand}</p>
        </CardContent>

        <CardFooter className="flex flex-wrap justify-between items-center gap-2 mt-2">
          <p className="text-sm sm:text-base font-semibold">${item.price}</p>
          <div className="flex gap-2">
            <Button
              aria-label="Add to cart"
              size="icon"
              className={clsx(
                "p-2 rounded-full border transition-colors duration-300",
                {
                  "bg-primary text-white hover:bg-white hover:text-primary border-primary": !isPressed,
                  "bg-white text-primary border-primary": isPressed,
                }
              )}
            >
              <FaCartPlus className="text-base sm:text-lg" />
            </Button>
            <Button
              aria-label="Add to favorites"
              size="icon"
              className={clsx(
                "p-2 rounded-full border transition-colors duration-300",
                {
                  "bg-primary text-white hover:bg-white hover:text-primary border-primary": !isPressed,
                  "bg-white text-primary border-primary": isPressed,
                }
              )}
            >
              <FaHeartCirclePlus className="text-base sm:text-lg" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default VCard;
