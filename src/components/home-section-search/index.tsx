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
