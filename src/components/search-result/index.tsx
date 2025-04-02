import { useSearchMovies } from "@/queries/movie.queries";
import LoadingIcon from "@/components/loading-icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useState } from "react";

type SearchResultProps = {
  searchInput: { text: string; year?: string };
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

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen p-24">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === "next" && currentPage < data.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>

      <div className="grid grid-cols-5 gap-4">
        {data.results.map((movie) => (
          <Card
            key={movie.id}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-t-lg"
              />
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">{movie.overview}</CardDescription>
            </CardContent>
            <CardFooter>Rating: {movie.vote_average.toFixed(1)}</CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className={`flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}>
          <IoChevronBackOutline size={20} /> Previous
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {data.total_pages}
        </span>

        <button
          className={`flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 ${
            currentPage === data.total_pages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange("next")}
          disabled={currentPage === data.total_pages}>
          Next <IoChevronForwardOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
