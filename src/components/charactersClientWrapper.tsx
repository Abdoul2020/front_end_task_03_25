"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterList } from "./characterList";
import { Pagination } from "./pagination";
import { fetchCharacters } from "@/lib/api";
import { CharacterFilters, CharactersResponse } from "../models/character";

interface CharactersClientWrapperProps {
  initialData?: CharactersResponse;
  page: number;
  filters: CharacterFilters;
  error: boolean;
}

export default function CharactersClientWrapper({
  initialData,
  page,
  filters,
  error: initialError,
}: CharactersClientWrapperProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", page, filters],
    queryFn: () => fetchCharacters(page, filters),
    initialData: initialData,
    staleTime: 60 * 1000, 
  });

  const totalPages = data?.info?.pages || 0;

  return (
    <>
      <CharacterList 
        characters={data?.results || []} 
        isLoading={isLoading} 
        isError={isError || initialError} 
      />
      
      {!isLoading && !isError && !initialError && (
        <Pagination 
          currentPage={page} 
          totalPages={totalPages} 
        />
      )}
    </>
  );
}