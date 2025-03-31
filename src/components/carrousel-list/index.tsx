import { useGetPopularMovies } from "@/queries/movie.queries";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoadingIcon } from "@/components/loading-icon";

const CarrouselList = () => {
  const { data, isLoading, isError, error } = useGetPopularMovies();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-24">
        <LoadingIcon size={20} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen p-24">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
        <h1 className="text-4xl font-bold">Popular Movies</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data?.results.map((movie) => (
            <Card key={movie.id} className="w-80">
              <CardHeader>
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>{movie.overview}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto"
                />
              </CardContent>
              <CardFooter>
                <p>Rating: {movie.vote_average}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default CarrouselList;
