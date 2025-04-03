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
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

type CardMovieProps = {
  movie: Movie;
  viewMode?: "grid" | "carrousel";
};

const CardMovie = ({ movie, viewMode }: CardMovieProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card
      className={`${
        viewMode === "carrousel"
          ? `min-w-[calc(100%_/_3)] max-w-[calc(100%_/_3)] md:min-w-[calc(100%_/_5)] md:max-w-[calc(100%_/_5)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 snap-end`
          : `rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`
      }`}>
      <CardHeader className="relative">
        {!isImageLoaded && <Skeleton className="w-full min-h-[300px] rounded-t-lg" />}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={`w-full min-h-2/3 rounded-t-lg transition-opacity duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
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
