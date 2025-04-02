import { useState } from "react";
import SearchBar from "@/components/search-bar";
import SearchResult from "@/components/search-result";
import type { SearchParams } from "@/types/search";

const SectionSearch = () => {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  return (
    <>
      <SearchBar onSearchChanges={(data) => setSearchParams(data)} />
      {searchParams && <SearchResult searchInput={searchParams} />}
    </>
  );
};

export default SectionSearch;
