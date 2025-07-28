import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "@/ui/comps/Comments";
import { useEffect, useState } from "react";

// Custom hook to detect screen width
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmall(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isSmall;
}

const reviews = [
  {
    name: "Samius Mikao",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    date: "July 28, 2025",
    comment:
      "Absolutely love this store! The phone arrived in perfect condition and earlier than expected. Will definitely shop again.",
    rating: 5,
  },
  {
    name: "Lina Bouzid",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    date: "July 22, 2025",
    comment:
      "Customer service was responsive and helpful. I had an issue with my payment and they resolved it quickly.",
    rating: 4,
  },
  {
    name: "Nadir Khalil",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    date: "July 20, 2025",
    comment:
      "The packaging was really secure and professional. Felt like I was unboxing a flagship product!",
    rating: 5,
  },
  {
    name: "Amira El Arbi",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
    date: "July 18, 2025",
    comment:
      "Great selection of phones but the delivery took a bit longer than expected. Still happy overall.",
    rating: 3,
  },
];

function Reviews() {
  const isSmallScreen = useIsSmallScreen();
  const orientation = isSmallScreen ? "vertical" : "horizontal";

  return (
    <section className="text-center px-4 py-10 w-full">
      <Carousel
        className="w-full max-w-5xl mx-auto relative overflow-visible px-2"
        orientation={orientation}
      >
        <CarouselPrevious
          className={`absolute ${
            isSmallScreen ? "top-2 left-1/2 -translate-x-1/2" : "left-2 top-1/2 -translate-y-1/2"
          } z-10 text-black bg-white shadow rounded-full p-2 hover:bg-gray-100 transition`}
        >
          &lt;
        </CarouselPrevious>

        <CarouselContent className="flex">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 px-2 transition-transform duration-300"
            >
              <div className="transform scale-100 hover:scale-105 transition-transform duration-300">
                <ReviewCard {...review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext
          className={`absolute ${
            isSmallScreen ? "bottom-2 left-1/2 -translate-x-1/2" : "right-2 top-1/2 -translate-y-1/2"
          } z-10 text-black bg-white shadow rounded-full p-2 hover:bg-gray-100 transition`}
        >
          &gt;
        </CarouselNext>
      </Carousel>
    </section>
  );
}

export default Reviews;
