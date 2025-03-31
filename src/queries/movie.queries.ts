import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import * as MovieService from "@/services/movie.service";
import type { MoviePopularListResponse } from "@/types/movie";

export const useGetPopularMovies = (
  options?: Omit<UseQueryOptions<MoviePopularListResponse, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<MoviePopularListResponse, Error>({
    queryKey: ["popular-movies"],
    queryFn: () => MovieService.getPopularMovies(),
    ...options,
  });
};
