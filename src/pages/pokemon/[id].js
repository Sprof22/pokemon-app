import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";


export const PokemonDetails = styled.div`
display: flex;
gap: 30px;
img{
    max-height: 300px;
}
  

`
export default function Details( {pokemon}) {
  const router = useRouter();
  const { id } = router.query;


  if (!pokemon) {
    return null;
  }
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/">Back to Home</Link>
      </div>
      <div>
        <PokemonDetails>
          <img
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
          />
        <div>
            <div>{pokemon.name}</div>
            <div>{pokemon.type.join(" ,")}</div>
            <table>
                <thead>
                    <tr>
                        <th style={{textAlign: 'start'}}>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.stats.map(({name, value}) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </PokemonDetails>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
    const res = await fetch(
        'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
      );
      const pokemon = await res.json()
  return {
    paths: pokemon.map(pokemon => ({
        params: {id: pokemon.id.toString()},
    })),
    fallback: false, 
  }
}

export async function getStaticProps({params}) {

    const res = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
      );
    return {
      props: {
        pokemon: await res.json() 
      }
    }
  }

  