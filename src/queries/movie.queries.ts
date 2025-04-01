import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { MoviePopularListResponse } from "@/types/movie";

export const useGetMovies = (
  queryKey: string,
  queryFn: () => Promise<MoviePopularListResponse>,
  options?: Omit<UseQueryOptions<MoviePopularListResponse, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<MoviePopularListResponse, Error>({
    queryKey: [queryKey],
    queryFn,
    ...options,
  });
};
