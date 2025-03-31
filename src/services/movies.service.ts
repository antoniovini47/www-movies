import { getConfig } from "@/lib/config";
import { api } from "@/services/api.service";

export async function getAuthTest(): Promise<void> {
  const response = await api(`${getConfig("theMovieDbBaseURL")}/movie/11`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Authentication failed");
  }

  return response.json();
}
