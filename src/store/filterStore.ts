import { create } from "zustand";
import { CharacterFilters } from "../models/character";

interface FilterStore {
  filters: CharacterFilters;
  setStatusFilter: (status: string | undefined) => void;
  setGenderFilter: (gender: string | undefined) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filters: {
    status: undefined,
    gender: undefined,
  },
  setStatusFilter: (status) => set((state) => ({ 
    filters: { ...state.filters, status } 
  })),
  setGenderFilter: (gender) => set((state) => ({ 
    filters: { ...state.filters, gender } 
  })),
  resetFilters: () => set({ 
    filters: { status: undefined, gender: undefined } 
  }),
}));