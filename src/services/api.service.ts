import { getConfig } from "@/lib/config";

const acessToken = getConfig("theMovieDbAcessToken");

export async function api(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<Response> {
  const defaultHeaders: Record<string, string> = {
    Authorization: `Bearer ${acessToken}`,
  };

  if (init?.body) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  let response = await fetch(input, {
    ...init,
    headers: {
      ...defaultHeaders,
      ...init?.headers,
    },
  });

  return response;
}
