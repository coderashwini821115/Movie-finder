import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useGenre from '../../hooks/useGenre';
const Popular = ({set , items, query, selectedGenres}) => {
const genreforURL = useGenre(selectedGenres);
  
  useEffect(() => {
    const fetchItems = async () => {
      var result;
      if(selectedGenres.length >= 1) {
        result = await axios(
          `https://api.themoviedb.org/3/discover/movie?api_key=117a1275a7795cc9963ca3459ea9c667&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreforURL}`
        )
      }
      else {
        result = await axios(
          `https://api.themoviedb.org/3/movie/popular?api_key=117a1275a7795cc9963ca3459ea9c667`
        )
      }
      // const result = await axios(
      //   `https://breakingbadapi.com/api/characters?limit=28`
      // )
      console.log(result.data);
      set(result);
    }
    fetchItems()
  }, [query === '', genreforURL])
  return (
    query===''?
    <div className='container'>
    <span className='pageTitle'>Popular Movies</span>
    </div>:<></>
  )
}

export default Popular
