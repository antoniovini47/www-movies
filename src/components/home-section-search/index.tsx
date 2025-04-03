/* Comentário para o teste técnico: 
Nesse componente eu quis demonstrar como faria a interação entre dois componentes, onde o primeiro
pode passar dados para o segundo.
E como eu faria para fazer uma animação de transição para que o segundo apareça
somente caso o primeiro tenha input, usando o tailwindcss para isso.
*/

import { useState } from "react";
import SearchBar from "@/components/search-bar";
import SearchResult from "@/components/search-result";
import type { SearchParams } from "@/types/search";

const SectionSearch = () => {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  return (
    <>
      <SearchBar onSearchChanges={(data) => setSearchParams(data)} />
      <div
        className={`transition-all duration-1000 ease-in-out ${
          searchParams ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}>
        {searchParams && <SearchResult searchInput={searchParams} />}
      </div>
    </>
  );
};

export default SectionSearch;
