import React from 'react'
import { getColorFromType, getRegion } from '../utils/utils'

const PokemonCard = ({name, types, img_url, weight, region}) => {
  return (
    <article className={`border border-gray-400 flex ${getColorFromType(types[0])}`}>
        <img className='w-32 h-32' src={img_url} alt={name} />
        <p className='text-2xl '>{name}</p>
        <div className='flex flex-col'>
          {types?.map((type, index) => (
            <p key={index} className='text-xl'>{type}</p>
          ))}
        </div>
        <p className='text-2xl'>{weight}</p>
        <p className='text-2xl'>{getRegion(region.toString())}</p>
    </article>
  )
}

export default PokemonCard