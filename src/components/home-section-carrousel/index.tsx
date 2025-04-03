/* Comentário para o teste técnico: 
Aqui quis demonstrar a reutilização de um mesmo component utilizando react query pra controlar
o conteúdo a ser exibido, e o título do carrousel, tudo através de props.
*/

import CarrouselList from "@/components/carrousel-list";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/services/movie.service";

const SectionCarrousel = () => {
  return (
    <>
      <CarrouselList title="Popular Movies" queryFunction={getPopularMovies} />
      <CarrouselList title="Top Rated Movies" queryFunction={getTopRatedMovies} />
      <CarrouselList title="Upcoming Movies" queryFunction={getUpcomingMovies} />
    </>
  );
};

export default SectionCarrousel;
