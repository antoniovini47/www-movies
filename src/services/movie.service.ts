/* Comentário para o teste técnico: 
Neste arquivo se encontrarm as principais funções que fazem requisições para a API do The Movie DB.
Elas abstraem a lógica do api.service.ts e utilizam a função api para fazer as requisições.

Quis demonstrar algumas variações de requisições, como a busca de filmes, que pode receber parâmetros de consulta, e a busca de detalhes de um filme específico.

As 3 primeirs são um get puro e na aplicação são chamadas para preencher os carrouséis, variando apenas o endpoint.

A searchMovies é um pouco diferente, pois ela recebe um SearchParams que contém o texto a ser pesquisado e a OPCIONALMENTE a página.
Ela também faz uso do endpoint de busca, que aceita o texto e a página como parâmetros de consulta.

E por último a getMovieDetails, que recebe um id e faz uma requisição para o endpoint de detalhes do filme.
*/

import { getConfig } from "@/lib/config";
import { api } from "@/services/api.service";
import { SearchParams } from "@/types/search";

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

export async function searchMovies(searchParams: SearchParams) {
  const response = await api(
    `${theMovieDbBaseURL}/search/movie?query=${searchParams.text}
    ${searchParams.page ? `&page=${searchParams.page}` : ""}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  return response.json();
}

export async function getMovieDetails(id: string) {
  const response = await api(`${theMovieDbBaseURL}/movie/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return response.json();
}
