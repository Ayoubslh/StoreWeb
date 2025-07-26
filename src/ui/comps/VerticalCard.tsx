
import {
  Card,
  CardContent,
 
  CardDescription,
 
  CardFooter,
 
  CardTitle,
} from "@/components/ui/card"

function VCard({name,icon, description}: {name: string, icon: React.ReactNode, description: string}) {

    return (
        <Card className="w-full h-full  max-w-sm bg-white shadow-lg items-center hover:shadow-xl   transition-shadow duration-300 hover:-translate-y-3 ">
            <CardContent className="flex flex-col items-center justify-center p-6">
                {icon}
            </CardContent>
             <CardDescription className="flex flex-col items-center justify-center p-4">
                <CardTitle className="text-2xl font-bold">{name}</CardTitle>
            </CardDescription>
          {description &&  <CardFooter className="text-center text-lg text-gray-700 mb-4">
                {description}
            </CardFooter>}
           
        </Card>
     
    );
}
export default VCard;