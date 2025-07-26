
import {
  Card,
  CardContent,
   CardAction,
  CardFooter,
 
  CardTitle,
} from "@/components/ui/card"
import type { PhoneDetails } from "@/Types/phone";

function VCard({item}: {item:PhoneDetails}) {

    return (
        <Card className="w-full h-full  max-w-sm bg-white shadow-lg items-center hover:shadow-xl   transition-shadow duration-300 hover:-translate-y-3 ">
            <CardContent className="flex flex-col items-center justify-center p-6">
               <img src={item.image} alt={item.name} className="w-full h-48 object-cover    " />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center p-4">
                <CardTitle className="text-2xl font-bold">{item.name}</CardTitle>
                <p className="text-lg text-gray-600">${item.price}</p>

            </CardFooter>
            <CardAction className="flex justify-between w-full p-4">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary-dark transition">
                    Add to Cart
                </button>
                <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-secondary-dark transition">
                    View Details
                </button>
            </CardAction>
        </Card>
     
    );
}
export default VCard;