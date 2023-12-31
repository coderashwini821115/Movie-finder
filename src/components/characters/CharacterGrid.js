import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
const CharacterGrid = ({items, isLoading}) => {
  return isLoading ? (
    <Spinner />
  ): (<section className='cards'>
    {items.results.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
    ))}
  </section>
  )
}

export default CharacterGrid
