import { useGetMovies } from "@/queries/movie.queries";
import LoadingIcon from "@/components/loading-icon";
import { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import CardMovie from "@/components/card-movie";

type CarrouselListProps = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryFunction: () => Promise<any>;
};

const CarrouselList = ({ title, queryFunction }: CarrouselListProps) => {
  const { data, isLoading, isError, error } = useGetMovies(title, queryFunction);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || !carouselRef.current) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const cardWidth = carouselRef.current?.children[0]?.clientWidth || 0;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current?.children[0]?.clientWidth || 0;
    carouselRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

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

  return (
    <div
      className="w-full p-6 bg-gray-100 rounded-lg shadow-md relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      {isHovered && (
        <>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-75 z-10"
            onClick={() => handleScroll("left")}>
            <IoChevronBackOutline size={20} />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-75 z-10"
            onClick={() => handleScroll("right")}>
            <IoChevronForwardOutline size={20} />
          </button>
        </>
      )}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto mx-6 gap-4 scroll-smooth snap-x snap-mandatory">
        {data?.results.map((movie) => (
          <CardMovie key={movie.id} movie={movie} viewMode="carrousel" />
        ))}
      </div>
    </div>
  );
};

export default CarrouselList;
