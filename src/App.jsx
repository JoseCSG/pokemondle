import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { Fragment, useState } from 'react'
import PokemonCard from './components/PokemonCard';

const getPokemonFromFirestore = async (pokemonName) => {
  const db = getFirestore();
  const pokemonRef = collection(db, 'pokemon');
  const snapshot = await getDocs(query(pokemonRef, where("name", "==", pokemonName)));
  const pokemon = snapshot.docs.map(doc => doc.data())[0]
  return pokemon
}

function App() {
  const [pokemon, setPokemon] = useState({})
  const [pokemons, setPokemons] = useState([])
  const [id, setId] = useState("")
  const handleSubmitPokemon = async (e) => {
    e.preventDefault()
    const pokemon = await getPokemonFromFirestore(id)
    setPokemons([pokemon, ...pokemons])
    setId("")
  }

  return (
    <div className='bg-slate-300'>
      <h1 className='text-3xl text-red-900'>Pokemondle</h1>
      <h2 className='text-2xl text-red-900'>Pokemon: {pokemon?.name}</h2>
      <form onSubmit={handleSubmitPokemon} className='flex flex-col'>
        <input
          className='border border-gray-400'
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          className='border border-gray-400'
          type="submit"
        >
          Get Pokemon
        </button>
      </form>
      <h2 className='text-2xl text-red-900'>Pokemons guessed so far</h2>
      <ul>
        {pokemons?.map((pokemon, index) => (
          <li key={index}><PokemonCard pokemon={pokemon}/></li>
        ))}
      </ul>
    </div>
  )
}

export default App
