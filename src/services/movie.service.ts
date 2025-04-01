import { getConfig } from "@/lib/config";
import { api } from "@/services/api.service";

const theMovieDbBaseURL = getConfig("theMovieDbBaseURL");

export async function getPopularMovies() {
  const response = await api(`${theMovieDbBaseURL}/movie/popular`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return response.json();
}

export async function getTopRatedMovies() {
  const response = await api(`${theMovieDbBaseURL}/movie/top_rated`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch top-rated movies");
  }

  return response.json();
}

export async function getUpcomingMovies() {
  const response = await api(`${theMovieDbBaseURL}/movie/upcoming`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  return response.json();
}
