import CarrouselList from "@/components/carrousel-list";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/services/movie.service";

export const SectionCarrousel = () => {
  return (
    <>
      <CarrouselList title="Popular Movies" queryFunction={getPopularMovies} />
      <CarrouselList title="Top Rated Movies" queryFunction={getTopRatedMovies} />
      <CarrouselList title="Upcoming Movies" queryFunction={getUpcomingMovies} />
    </>
  );
};
