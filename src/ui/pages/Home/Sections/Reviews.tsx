import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ReviewCard from "@/ui/comps/Comments";

export const reviews = [
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
  return (
    <section className="text-center px-4 py-10 ">   
     

      <Carousel className="w-full max-w-5xl mx-auto relative overflow-visible">
        <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 text-black bg-white shadow rounded-full p-2 hover:bg-gray-100 transition">
          &lt;
        </CarouselPrevious>

        <CarouselContent className="flex">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 px-2 transition-transform duration-300"
            >
              <div className="transform scale-90 sm:scale-95 md:scale-100 transition-transform duration-300 hover:scale-105">
                <ReviewCard {...review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 text-black bg-white shadow rounded-full p-2 hover:bg-gray-100 transition">
          &gt;
        </CarouselNext>
      </Carousel>
    </section>
  );
}

export default Reviews;
