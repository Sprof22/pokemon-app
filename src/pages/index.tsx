import Head from 'next/head'
import styled from "styled-components";
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Pokemons } from './data/pokemon';
import axios from 'axios';
import { useBusinessStore } from './store/pokemon';

export const PokemonCard = styled.div`
display: flex;
align-items: center;
img {
  max-height: 200px;

}

h3{
  color: green;
}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-gap: 7px;
  margin: auto;
  width: 1440px;
  justify-content: space-between;
  border: 1px solid green;

`



export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemons[]>([])
  const {fetchPokemons, pokemons} = useBusinessStore();
  useEffect(() => {
    fetchPokemons()
  }, [])
  
  return (
    <div style={{background: '#fff'}}>
      <Head>
        <title>The Pokemon List</title>
      </Head>
      <div>
      <h2>Pokemon List</h2>
      <Grid>

      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`} >
            <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt='' />
            <h3>{pokemon.name}</h3>
          </Link>
        </PokemonCard>
      ))}
      </Grid>
      </div>
        
    </div>
  )
}
