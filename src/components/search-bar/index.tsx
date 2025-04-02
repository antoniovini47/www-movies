import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { debounce } from "lodash";
import { useState } from "react";
import { SearchParams } from "@/types/search";

type SearchBarProps = {
  onSearchChanges: (searchParams: SearchParams) => void;
};

const SearchBar = ({ onSearchChanges }: SearchBarProps) => {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  const debouncedOnSearchChanges = debounce((updatedSearchParams: SearchParams) => {
    setSearchParams(updatedSearchParams);
    onSearchChanges(updatedSearchParams);
  }, 500);

  return (
    <div className="relative w-full max-w-md">
      <FaSearch className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-500 z-10" />
      <Input
        onChange={(e) => {
          const value = e.target.value;
          debouncedOnSearchChanges({ ...searchParams, text: value });
        }}
        className=" bg-slate-200 border-2 border-slate-100 rounded-full w-full min-h-12 pl-5"
        placeholder="Search through all movies..."
      />
    </div>
  );
};

export default SearchBar;
