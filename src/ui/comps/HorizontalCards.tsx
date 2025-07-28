import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

function HCard({
  name,
  icon,
  description,
}: {
  name: string;
  icon: React.ReactNode;
  description?: string;
}) {
  return (
    <Card className="group flex flex-row max-w-md bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary items-center overflow-hidden">
      <div className="flex flex-row items-center p-4 gap-4 w-full group-hover:gap-6 transition-all duration-500">
        <div className="flex-shrink-0 text-4xl transition-colors duration-300 group-hover:text-primary">
          {icon}
        </div>
        
        <div className="flex flex-col justify-center min-w-0 w-0 overflow-hidden opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <CardTitle className="text-base font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
            {name}
          </CardTitle>
          {description && (
            <CardDescription className="text-gray-600 text-sm mt-1 group-hover:text-primary/80 transition-colors duration-300 line-clamp-2">
              {description}
            </CardDescription>
          )}
        </div>
      </div>
    </Card>
  );
}

export default HCard;