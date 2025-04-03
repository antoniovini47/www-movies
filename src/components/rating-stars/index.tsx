import { Badge } from "@/components/ui/badge";

type RatingProps = {
  rating: number;
};

const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 10;
  const minGoodLevel = 7;
  const minMediumLevel = 4;
  const filledStars = Math.round(rating / 2);
  const emptyStars = 5 - filledStars;

  const getBadgeColorByRating: (rating: number) => string = (rating) => {
    if (rating >= minGoodLevel) {
      return `bg-green-${
        400 +
        Math.round(((1 - (maxRating - rating) / (maxRating - minGoodLevel)) * 500) / 100) * 100
      }`;
    }
    if (rating >= minMediumLevel) {
      return `bg-yellow-${
        200 +
        Math.round(((1 - (minGoodLevel - rating) / (maxRating - minMediumLevel)) * 300) / 100) * 100
      }`;
    }
    return `bg-red-${
      400 + Math.round(((1 - (minMediumLevel - rating) / (maxRating - 0)) * 500) / 100) * 100
    }`;
  };

  return (
    <div className="flex items-center space-x-2 group">
      <div className="flex space-x-1">
        {Array.from({ length: filledStars }).map((_, index) => (
          <span
            key={`filled-${index}`}
            className="text-slate-500 transition-transform duration-1000 group-hover:scale-110">
            ★
          </span>
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span
            key={`empty-${index}`}
            className="text-gray-300 transition-transform duration-1000 group-hover:scale-110">
            ★
          </span>
        ))}
      </div>
      <Badge
        className={`transition-transform duration-1000 group-hover:scale-110 ${getBadgeColorByRating(
          rating
        )}`}>
        {rating.toFixed(1)} / {maxRating}
      </Badge>
    </div>
  );
};

export default RatingStars;
