/* Comentário para o teste técnico: 
Aqui eu quis demonstrar um pouco mais de complexidade, utilizando o Tailwind CSS para estilização e animações, 
além de criar um componente Badge reutilizável.
E também inclui a lógica da função getBadgeColorByRating que calcula a cor do badge com base na classificação.
Como para cada um dos 3 níveis possuem sua própria lógica de cor, eu criei uma função para evitar repetir o mesmo código.

Uma boa prática poderia ser tirar essa lógica de cor para um arquivo separado, talvez em utils, mas quis deixar aqui,
porque pelo menos no projeto teste, não foi necessário fazer isso.

Esses cálculos de getBadgeColorByRating são feitos para utilizar as cores do Tailwind CSS, 
importante ressaltar que foi necessário fazer ajustes no arquivo tailwind.config.js para que as cores
já estivem pré-carregadas e disponíveis para uso, como por exemplo:
bg-green-400, bg-yellow-500, bg-red-400.

Cada cor tem um início (400/200/400) e um limite (500/300/500) e um "range" próprio
porque visualmente fariam mais sentido para o usuário, mas isso poderia ser
ajustado para o gosto do desenvolvedor.
 */

import { Badge } from "@/components/ui/badge";

type RatingProps = {
  rating: number;
};

const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 10;
  const minGoodLevel = 7;
  const minMediumLevel = 4;
  const filledStars = Math.round(rating / 2);
  const emptyStars = 5 - filledStars;

  const getBadgeColorByRating: (rating: number) => string = (rating) => {
    if (rating >= minGoodLevel) {
      return `bg-green-${
        400 +
        Math.round(((1 - (maxRating - rating) / (maxRating - minGoodLevel)) * 500) / 100) * 100
      }`;
    }
    if (rating >= minMediumLevel) {
      return `bg-yellow-${
        200 +
        Math.round(((1 - (minGoodLevel - rating) / (maxRating - minMediumLevel)) * 300) / 100) * 100
      }`;
    }
    return `bg-red-${
      400 + Math.round(((1 - (minMediumLevel - rating) / (maxRating - 0)) * 500) / 100) * 100
    }`;
  };

  return (
    <div className="flex items-center space-x-2 group">
      <div className="flex space-x-1">
        {Array.from({ length: filledStars }).map((_, index) => (
          <span
            key={`filled-${index}`}
            className="text-slate-500 transition-transform duration-1000 group-hover:scale-110">
            ★
          </span>
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span
            key={`empty-${index}`}
            className="text-gray-300 transition-transform duration-1000 group-hover:scale-110">
            ★
          </span>
        ))}
      </div>
      <Badge
        className={`transition-transform duration-1000 group-hover:scale-110 ${getBadgeColorByRating(
          rating
        )}`}>
        {rating.toFixed(1)} / {maxRating}
      </Badge>
    </div>
  );
};

export default RatingStars;
