export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
}

export interface CharacterFilters {
    status?: string;
    gender?: string;
}

export interface CharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}