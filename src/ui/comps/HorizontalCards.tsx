import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useGetAllItems } from "@/apis/items/GetAllItems";

function HCard({
  name,
  icon,
  description,
}: {
  name: string;
  icon: React.ReactNode;
  description?: string;
}) {
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  return (

    <Card
      className={clsx(
        "group flex flex-row max-w-md bg-white shadow-md transition-all duration-300 border-2 items-center overflow-hidden",
        {
          "hover:shadow-xl hover:scale-[1.02] hover:border-primary": true,
          "scale-[1.02] shadow-xl border-primary": isTouched,
          "border-transparent": !isTouched,
        }
      )}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 300)} // smooth release
      onClick={() => {
        
        navigate(`/AllProds?brand=${name}`);
      }}
    >
      <div
        className={clsx(
          "flex flex-row items-center p-4 gap-4 w-full transition-all duration-500",
          {
            "group-hover:gap-6": true,
            "gap-6": isTouched,
          }
        )}
      >
        <div
          className={clsx(
            "flex-shrink-0 text-4xl transition-colors duration-300",
            {
              "group-hover:text-primary": true,
              "text-primary": isTouched,
            }
          )}
        >
          {icon}
        </div>

        <div
          className={clsx(
            "flex flex-col justify-center min-w-0 w-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out",
            {
              "group-hover:w-full group-hover:opacity-100": true,
              "w-full opacity-100": isTouched,
            }
          )}
        >
          <CardTitle
            className={clsx(
              "text-base font-semibold text-gray-800 transition-colors duration-300 whitespace-nowrap",
              {
                "group-hover:text-primary": true,
                "text-primary": isTouched,
              }
            )}
          >
            {name}
          </CardTitle>

          {description && (
            <CardDescription
              className={clsx(
                "text-gray-600 text-sm mt-1 transition-colors duration-300 line-clamp-2",
                {
                  "group-hover:text-primary/80": true,
                  "text-primary/80": isTouched,
                }
              )}
            >
              {description}
            </CardDescription>
          )}
        </div>
      </div>
    </Card>
  );
}

export default HCard;
