import { getConfig } from "@/lib/config";
import { api } from "@/services/api.service";

const theMovieDbBaseURL = getConfig("theMovieDbBaseURL");

export async function getAuthTest() {
  const response = await api(`${theMovieDbBaseURL}/movie/11`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Authentication failed");
  }

  return response.json();
}

export async function getPopularMovies() {
  const response = await api(`${theMovieDbBaseURL}/movie/popular`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return response.json();
}
