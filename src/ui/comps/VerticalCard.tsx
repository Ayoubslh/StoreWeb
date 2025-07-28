import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

function VCard({
  name,
  icon,
  description,
}: {
  name: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <Card className="group max-w-sm bg-white shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-primary">
      <CardContent className="flex flex-col items-center justify-center p-6">
        {icon && <div className="mb-4">{icon}</div>}
      </CardContent>

      <CardDescription className="flex flex-col items-center justify-center p-4">
        <CardTitle className="text-2xl font-bold sm:text-lg md:text-xl transition-colors duration-300 group-hover:text-primary">
          {name}
        </CardTitle>
      </CardDescription>

      {description && (
        <CardFooter className="text-center text-lg text-gray-700 mb-4 transition-colors duration-300 group-hover:text-primary">
          {description}
        </CardFooter>
      )}
    </Card>
  );
}

export default VCard;
