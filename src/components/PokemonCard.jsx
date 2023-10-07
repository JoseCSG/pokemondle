import React from 'react'
import { getColorFromType } from '../utils/utils'

const PokemonCard = ({pokemon}) => {
  return (
    <article className={`border border-gray-400 bg-${getColorFromType(pokemon?.types[0])}`}>
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h3 className='text-2xl '>{pokemon?.name}</h3>
                {pokemon?.types?.map((type, index) => (
                    <p key={index} className='text-xl'>{type}</p>
                ))}
                <p className='text-xl'>{pokemon?.type}</p>
            </div>
            <img className='w-32 h-32' src={pokemon?.img_url} alt={pokemon?.name} />
        </div>
    </article>
  )
}

export default PokemonCard