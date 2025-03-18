import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/lib/api";
import { CharacterFilters } from "@/models/character";

export function useCharacterQuery(page: number, filters: CharacterFilters) {
  return useQuery({
    queryKey: ["characters", page, filters],
    queryFn: () => fetchCharacters(page, filters),
    placeholderData: (previousData) => previousData,
    staleTime: 5 * 60 * 1000,
  });
}