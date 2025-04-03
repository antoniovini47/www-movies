import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { MovieListResponse } from "@/types/movie";
import * as MovieService from "@/services/movie.service";
import { SearchParams } from "@/types/search";

export const useGetMovies = (
  queryKey: string,
  queryFn: () => Promise<MovieListResponse>,
  options?: Omit<UseQueryOptions<MovieListResponse, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<MovieListResponse, Error>({
    queryKey: [queryKey],
    queryFn,
    ...options,
  });
};

export const useSearchMovies = (
  searchParams: SearchParams,
  options?: Omit<UseQueryOptions<MovieListResponse, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<MovieListResponse, Error>({
    queryKey: ["search-movies", searchParams],
    queryFn: () => MovieService.searchMovies(searchParams),
    ...options,
  });
};

export const useGetMovieDetails = (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: Omit<UseQueryOptions<any, Error>, "queryKey" | "queryFn">
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQuery<any, Error>({
    queryKey: ["movie-details", id],
    queryFn: () => MovieService.getMovieDetails(id),
    ...options,
  });
};
