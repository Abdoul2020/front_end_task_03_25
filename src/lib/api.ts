import { CharacterFilters, CharactersResponse } from "../models/character";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(
  page: number = 1,
  filters: CharacterFilters = {}
): Promise<CharactersResponse> {
  const queryParams = new URLSearchParams();
  
  if (page) {
    queryParams.append("page", page.toString());
  }
  
  if (filters.status) {
    queryParams.append("status", filters.status);
  }
  
  if (filters.gender) {
    queryParams.append("gender", filters.gender);
  }
  
  const url = `${API_BASE_URL}/character/?${queryParams.toString()}`;
  const response = await fetch(url);

  console.log("watchhthis:", response);

  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
} 