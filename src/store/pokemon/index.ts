import apis from "@/apis";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IPokemonStore } from "../../data/pokemon";

export const useBusinessStore = create(
    persist<IPokemonStore>(
        (set, get) => ({
            pokemons: [],
            createPokemon: async (payload) => {},
            fetchPokemons: async (filter)=> {
            const res = await apis.fetchPokemons()
            set({pokemons: res.data})
            },
            removePokemon: async (payload) => {},
        }),
        {
            name: "pokemon-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
