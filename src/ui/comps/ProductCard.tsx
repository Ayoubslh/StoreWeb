
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
   CardAction,
  CardFooter,
 
  CardTitle,
} from "@/components/ui/card"
import type { PhoneDetails } from "@/Types/phone";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";

function VCard({item}: {item:PhoneDetails}) {

    return (
        <Card className="w-full   max-w-sm bg-white shadow-lg  hover:shadow-xl   transition-shadow duration-300 hover:-translate-y-3 ">
            <CardContent className="flex flex-col   ">
               <img src={item.image} alt={item.name} className="w-full h-48 object-contain" />
            </CardContent>
            <CardFooter className="flex-col  p-4">
                <CardTitle className="text-2xl font-bold">{item.name}</CardTitle>
                <p className="text-sm text-gray-500">{item.brand}   </p>
                <p className="text-lg text-gray-600">${item.price}</p>

                <div className="flex justify-between gap-4 items-center mt-4">
                       <Button className=" bg-primary text-white hover:bg-white hover:text-primary border border-primary">
                   <FaCartPlus className="mr-2" />
                   
                </Button>
                 <Button className=" bg-primary text-white hover:bg-white hover:text-primary border border-primary">
                   <FaHeartCirclePlus className="mr-2" />
                   
                </Button>
                </div>
                
                

            </CardFooter>
        </Card>
     
    );
}
export default VCard;