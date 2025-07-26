
import {
  Card,
  CardContent,
 
  CardFooter,
 
  CardTitle,
} from "@/components/ui/card"

function VCard({name,icon}: {name: string, icon: React.ReactNode}) {

    return (
        <Card className="w-full h-full  max-w-sm bg-white shadow-lg items-center hover:shadow-xl hover:-translate-y-3   transition-shadow duration-300  ">
            <CardContent className="flex flex-col items-center justify-center p-6">
                {icon}
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center p-4">
                <CardTitle className="text-2xl font-bold">{name}</CardTitle>
            </CardFooter>
        </Card>
     
    );
}
export default VCard;