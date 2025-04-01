import { Badge } from "@/components/ui/badge";

type RatingProps = {
  rating: number;
};

const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 10;
  const filledStars = Math.round(rating / 2);
  const emptyStars = 5 - filledStars;

  const getBadgeVariant = (rating: number): "string" => {
    if (rating >= 8) return "default";
    if (rating >= 5) return "secondary";
    return "destructive";
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1">
        {Array.from({ length: filledStars }).map((_, index) => (
          <span key={`filled-${index}`} className="text-yellow-500">
            ★
          </span>
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
      </div>
      <Badge variant={getBadgeVariant(rating)}>
        {rating.toFixed(1)} / {maxRating}
      </Badge>
    </div>
  );
};

export default RatingStars;
