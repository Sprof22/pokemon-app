export interface Pokemons extends createPokemon{
    id: string;
}

export interface createPokemon {
    name: string;
    image: string;
    hp: number
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export interface deletePokemon{
    id: string,
}


export interface pokemonStore {
    pokemons: Pokemons[];
}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    numberOfPages?: number;
}

interface fetchBusinessesPayload {
    filter?: pokemonFilter;
    pagination: Pagination;
}

export type pokemonFilter = Pick<Pokemons, 'attack'|'defense'|'speed' >

export interface IPokemonStore extends pokemonStore {
    fetchPokemons: (payload?: fetchBusinessesPayload) => Promise<void>
    createPokemon: (payload: createPokemon) => Promise<void>
    removePokemon: (payload: deletePokemon) => Promise<void>
}