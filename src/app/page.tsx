import React from "react";
import  {FilterControls} from "@/components/filterBar"
import { fetchCharacters } from "@/lib/api";
import { CharactersResponse } from "@/models/character";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import CharactersClientWrapper from "@/components/charactersClientWrapper";

interface PageProps {
  searchParams: {
    page?: string;
    status?: string;
    gender?: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || "1");
  const filters = {
    status: searchParams.status,
    gender: searchParams.gender,
  };

  // Create a new QueryClient for the server
  const queryClient = new QueryClient();

  // Prefetch data on the server
  await queryClient.prefetchQuery({
    queryKey: ["characters", page, filters],
    queryFn: () => fetchCharacters(page, filters)
  });

  // Get the data for rendering
  let charactersData: CharactersResponse | undefined;
  let error = false;
  
  try {
    charactersData = await fetchCharacters(page, filters);
  } catch (e) {
    error = true;
  }

  //  the query cache for client-side rehydration
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Rick and Morty Character Finder</h1>
      
      <FilterControls />
      
      <HydrationBoundary state={dehydratedState}>
        <CharactersClientWrapper
          initialData={charactersData}
          page={page} 
          filters={filters}
          error={error}
        />
      </HydrationBoundary>
    </main>
  );
}
