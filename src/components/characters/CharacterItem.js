import React from 'react'
import ContentModal from '../ContentModal/ContentModal'

const CharacterItem = ({item}) => {
  // console.log(item);
  // console.log(item.img)
  return (
    <ContentModal id = {item.id}>
    <div className='card-inner'>
      <div className='card-front'>
        <img src= {`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt='No image available' />
      </div>
      <div className='card-back' >
        <h1>{item.title}</h1>
        <ul  >
          {/* <li >
            {item.overview}
          </li> */}
          <li>
            <strong>Release date:</strong> {item.release_date}
          </li>
          <li>
            <strong>Original language:</strong> {item.original_language}
          </li>
          <li>
            <strong>Rating:</strong> {item.vote_average}
          </li>
        </ul>
      </div>
    </div>
  </ContentModal>
)
}

export default CharacterItem
