import { useSearchMovies } from "@/queries/movie.queries";
import LoadingIcon from "@/components/loading-icon";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import CardMovie from "@/components/card-movie";
import { useState } from "react";

type SearchResultProps = {
  searchInput: { text: string };
};

const SearchResult = ({ searchInput }: SearchResultProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, error } = useSearchMovies({
    ...searchInput,
    page: currentPage,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-24">
        <LoadingIcon size={20} />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen p-24">
        <p className="text-red-500">Error: {error?.message}</p>
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>

      <div className="grid grid-cols-5 gap-4">
        {data.results.map((movie) => (
          <CardMovie key={movie.id} movie={movie} viewMode="grid" />
        ))}
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              isActive={currentPage === 1}
            />
          </PaginationItem>

          {Array.from({ length: data.total_pages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
                isActive={currentPage === index + 1}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              isActive={currentPage === data.total_pages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default SearchResult;
