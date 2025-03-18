import React from "react";
import { Character } from "../models/character";
import { CharacterCard } from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
  isLoading: boolean;
  isError: boolean;
}

export function CharacterList({ characters, isLoading, isError }: CharacterListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading characters...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center text-red-500">
          <p>Error loading characters. Please try again.</p>
        </div>
      </div>
    );
  }

  if (characters.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p>No characters found matching your filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}