/* Comentário para o teste técnico: 
Aqui fiz um component polivalente que utiliza da biblioteca shadcn/ui para criar um card com os 
dados do filme.
Nesse arquivo demonstro como funcionaria a utilização do card mesmo em diversos tipos de layout
passando as classNames que eu gostaria de aplicar. (Assim ele pode utilizando tanto em grid como em flex,
sem afetar o layout do card)

Também optei optei por utilizar skeletons para melhorar a experiência do usuário enquanto a imagem não carrega.
E em alguns casos que a imagem não existe, como no caso de filmes antigos, o skeleton é exibido.
*/

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import RatingStars from "@/components/rating-stars";
import type { Movie } from "@/types/movie";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import Link from "next/link";

type CardMovieProps = {
  movie: Movie;
  className?: string;
};

const CardMovie = ({ movie, className }: CardMovieProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card
      className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-1000 ${className}`}>
      <CardHeader className="relative">
        {!isImageLoaded && <Skeleton className="w-full min-h-[300px] rounded-t-lg" />}
        <Link href={`/movie/${movie.id}`} className="w-full h-full z-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={`w-full min-h-2/3 rounded-t-lg transition-opacity duration-1000 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-105 group-hover:brightness-90`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </Link>
        <CardTitle className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm transition-transform duration-1000 group-hover:-translate-y-1 z-20 max-w-4/5">
          <Badge variant="default" className="w-full px-2 truncate">
            <text className="truncate text-start">{movie.title}</text>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 line-clamp-3 group-hover:text-gray-800 transition-colors duration-1000">
          {movie.overview}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <RatingStars rating={movie.vote_average} />
      </CardFooter>
      <div className="absolute inset-0 border border-transparent group-hover:border-slate-500 rounded-lg transition-all duration-500"></div>
    </Card>
  );
};

export default CardMovie;
