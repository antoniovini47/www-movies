import CarrouselList from "@/components/carrousel-list";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/services/movie.service";
import SearchBar from "@/components/search-bar";
import SearchResult from "@/components/search-result";
import { useState } from "react";
import type { SearchParams } from "@/types/search";

export const SectionSearch = () => {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  return (
    <>
      <SearchBar onSearchChanges={(data) => setSearchParams(data)} />
      {searchParams && <SearchResult searchInput={searchParams} />}
    </>
  );
};

export const SectionCarrousel = () => {
  return (
    <>
      <CarrouselList title="Popular Movies" queryFunction={getPopularMovies} />
      <CarrouselList title="Top Rated Movies" queryFunction={getTopRatedMovies} />
      <CarrouselList title="Upcoming Movies" queryFunction={getUpcomingMovies} />
    </>
  );
};
