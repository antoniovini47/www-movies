/* Comentário para o teste técnico: 
Aqui quis demonstrar um pouco sobre a tipagem do TypeScript,
como podemos tipar uma requisição de API,
e como podemos criar um tipo para o retorno dela.

Além de usar um tipo dentro do outro.

Tudo isso pra facilitar a manutenção e o entendimento do código.
Evitando o uso de "any".

Esses foram gerados diretamente com base na documentação da API do TMDB.
*/

export type MovieListResponse = {
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
