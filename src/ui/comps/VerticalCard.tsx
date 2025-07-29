import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import clsx from "clsx";

function VCard({
  name,
  icon,
  description,
}: {
  name: string;
  icon: React.ReactNode;
  description: string;
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Card
      className={clsx(
        "group max-w-sm bg-white shadow-lg transition duration-300 border-2",
        {
          "hover:shadow-xl hover:-translate-y-2 hover:scale-105 hover:border-primary": true, // Desktop
          "border-transparent": !isPressed,
          "border-primary scale-105 shadow-xl": isPressed, // Mobile tap
        }
      )}
      role="button"
      tabIndex={0}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)} // fallback in case mouse used
    >
      <CardContent className="flex flex-col items-center justify-center p-6">
        {icon && (
          <div
            className={clsx("mb-4 transition-colors duration-300", {
              "text-primary": isPressed,
              "group-hover:text-primary": true,
            })}
          >
            {icon}
          </div>
        )}
      </CardContent>

      <CardDescription className="flex flex-col items-center justify-center p-4">
        <CardTitle
          className={clsx(
            "text-2xl font-bold sm:text-lg md:text-xl transition-colors duration-300",
            {
              "text-primary": isPressed,
              "group-hover:text-primary": true,
            }
          )}
        >
          {name}
        </CardTitle>
      </CardDescription>

      {description && (
        <CardFooter
          className={clsx(
            "text-center text-lg text-gray-700 mb-4 transition-colors duration-300",
            {
              "text-primary": isPressed,
              "group-hover:text-primary": true,
            }
          )}
        >
          {description}
        </CardFooter>
      )}
    </Card>
  );
}

export default VCard;
