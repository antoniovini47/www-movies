import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { MovieListResponse } from "@/types/movie";
import { searchMovies } from "@/services/movie.service";
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
    queryFn: () => searchMovies(searchParams),
    ...options,
  });
};
