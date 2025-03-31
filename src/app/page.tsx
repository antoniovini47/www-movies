"use client";

import { Button } from "@/components/ui/button";
import { getAuthTest } from "@/services/movies.service";

const handleAuthTest = async () => {
  try {
    const response = await getAuthTest();
    console.log("Authentication successful: ", response);
  } catch (error) {
    console.error("Authentication failed: ", error);
  }
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
        <h1 className="text-4xl font-bold">Welcome to WWW Movies</h1>
        <p className="mt-4 text-lg">What and Where to Watch Movies</p>
        <Button className="mt-8" variant="default" onClick={handleAuthTest}>
          Test Auth
        </Button>
      </div>
    </>
  );
}
