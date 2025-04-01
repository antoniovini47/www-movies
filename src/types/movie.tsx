export type MoviePopularListResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  popularity: number;
  vote_average: number;
  vote_count: number;
  original_language: string;
  original_title?: string;
  genre_ids: number[];
  video?: boolean;
  adult?: boolean;
};
