import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRatingComponent from "./starRating";

interface ReviewCardProps {
  name: string;
  avatarUrl?: string;
  comment: string;
  date: string;
  rating: number; // You’ll pass your StarRatingComponent here
}

export default function ReviewCard({
  name,
  avatarUrl,
  comment,
  date,
  rating,
}: ReviewCardProps) {
  return (
    <Card className="w-full max-w-md shadow-md border border-gray-200 hover:shadow-lg transition">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarUrl || "https://via.placeholder.com/150"} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-sm font-medium">{name}</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {date}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
       
        <p className="text-sm text-gray-700 leading-relaxed">{comment}</p>
        <StarRatingComponent rating={rating} />

      </CardContent>
    </Card>
  );
}
