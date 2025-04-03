/* Comentário para o teste técnico: 
Aqui precisei criar este arquivo para controle de cores, pois,
os badges de classificação dos filmes são gerados dinamicamente e não
são reconhecidos pelo tailwind, então adicionei as cores que são utilizadas
para que o tailwind gere as classes correspondentes.

PS: Algumas dessas não são mais usadas porque o "range" foi limitado, porque,
o amarel-100 é muito claro e tem pouco apelo visual.
*/

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-900",
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-900",
    "bg-red-100",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
  ],
};
