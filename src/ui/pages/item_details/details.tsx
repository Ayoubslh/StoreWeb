"use client";

// import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ReviewCard from "@/ui/comps/Comments";
import {Link,useNavigate} from "react-router-dom";

import { useGetItem } from "@/apis/items/GetItem";
import { useParams } from "react-router-dom";




// 🔹 Real reviews you can replace later
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
];

export default function PhoneDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: phone } = useGetItem(id);
  const navigate = useNavigate();

  if (!phone) {
    return <div>Loading...</div>;
  }
  const product={product:{_id: id,
    name: phone.name,
    price: phone.price,
   
    image: phone.image,
    brand: phone.brand,
    selected: true,
  }, quantity: 1,selected: true,_id: id};
  function handleClick(id: string) {
    if (!phone) return;
    navigate('/checkout', { state: { cartItems:  JSON.stringify ( [product]) } });
  }

  return (
    <div className="container max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* 📱 Phone image */}
        <div>
          <img
            src={phone.image}
            alt={phone.name}
            width={500}
            height={500}
            className="rounded-lg object-contain w-full"
          />
        </div>

        {/* 🔤 Phone details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{phone.name}</h1>
          <p className="text-muted-foreground">{phone.description}</p>
          <p className="text-2xl font-semibold text-primary">${phone.price}</p>
          <p className="text-sm text-gray-500">
            {phone.ratingQuantity} reviews | ⭐ {phone.averageRatings.toFixed(1)} / 5
          </p>

          <div className="flex space-x-2 mt-4">
            <Button size="lg">Add to Cart</Button>
            <Button variant="outline" size="lg" onClick={() => handleClick(phone._id)}>Buy Now</Button>
          </div>
        </div>
      </div>

      {/* 📑 Tabs for specs & reviews */}
      <div className="mt-10">
        <Tabs defaultValue="specs">
          <TabsList className="w-full justify-start gap-4">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {Object.entries(phone.specs).map(([section, data]) => (
                <Card key={section} className="p-4">
                  <h3 className="font-semibold capitalize mb-2">{section}</h3>
                  <ul className="space-y-1">
                    {Object.entries(data).map(([key, val]) => (
                      val && (
                        <li key={key}>
                          <strong className="capitalize">{key}:</strong> {val}
                        </li>
                      )
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="pt-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {reviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
