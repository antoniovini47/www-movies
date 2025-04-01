"use client";
import { SectionCarrousel } from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-24">
        <h1 className="text-4xl font-bold">Welcome to WWW Movies</h1>
        <p className="mt-4 text-lg">What and Where to Watch Movies</p>
        <SectionCarrousel />
      </div>
    </>
  );
}
