/* Comentário para o teste técnico: 
Aqui quis demonstrar como faria a página inicial do site, somente
chamando components principais que representassem seções do site.
*/
"use client";
import app from "@/constants/app-data";
import SectionSearch from "@/components/home-section-search";
import SectionCarrousel from "@/components/home-section-carrousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to {app.name}</h1>
          <p className="mt-4 text-lg">{app.description}</p>
        </div>
        <SectionSearch />
        <SectionCarrousel />
      </div>
    </>
  );
}
