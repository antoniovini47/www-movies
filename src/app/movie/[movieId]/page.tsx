"use client";

import { useGetMovieDetails } from "@/queries/movie.queries";
import LoadingIcon from "@/components/loading-icon";
import { Badge } from "@/components/ui/badge";
import { use } from "react";
import { Separator } from "@/components/ui/separator";
import RatingStars from "@/components/rating-stars";

const MovieDetailsPage = ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = use(params);

  const { data, isLoading, isError, error } = useGetMovieDetails(movieId);

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
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="w-full md:w-1/3 rounded-lg shadow-md"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-lg text-gray-600">{data.tagline || "No tagline available"}</p>
          <Badge variant="secondary">Release Date: {data.release_date}</Badge>
          <RatingStars rating={data.vote_average} />
          {data.genres && (
            <div>
              <h3 className="text-xl font-bold mb-2">Genres</h3>
              <ul className="flex flex-wrap gap-2">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {data.genres.map((genre: any) => (
                  <Badge key={genre.id} variant="outline">
                    {genre.name}
                  </Badge>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600">{data.overview || "No overview available."}</p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Original Language</h3>
          <p>{data.original_language.toUpperCase()}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Budget</h3>
          <p>${data.budget.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Revenue</h3>
          <p>${data.revenue.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Runtime</h3>
          <p>{data.runtime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
