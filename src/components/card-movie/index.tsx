import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import RatingStars from "@/components/rating-stars";
import type { Movie } from "@/types/movie";
import { Badge } from "@/components/ui/badge";

type CardMovieProps = {
  movie: Movie;
};

const CardMovie = ({ movie }: CardMovieProps) => {
  return (
    <Card className="min-w-[calc(100%_/_3)] max-w-[calc(100%_/_3)] md:min-w-[calc(100%_/_5)] md:max-w-[calc(100%_/_5)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 snap-end">
      <CardHeader className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-t-lg"
        />
        <CardTitle className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm">
          <Badge variant="default" className="max-w-4/5 px-5">
            {movie.title}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 line-clamp-3">
          {movie.overview}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <RatingStars rating={movie.vote_average} />
      </CardFooter>
    </Card>
  );
};

export default CardMovie;
