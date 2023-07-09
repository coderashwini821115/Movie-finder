import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Popular = ({set , items, query}) => {
    
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=117a1275a7795cc9963ca3459ea9c667`
      )
      // const result = await axios(
      //   `https://breakingbadapi.com/api/characters?limit=28`
      // )
      console.log(result.data);
      set(result);
    }
    fetchItems()
  }, [query == ''])
  return (
    query==''?
    <div className='container'>
    <span className='pageTitle'>Popular Movies</span>
    </div>:<></>
  )
}

export default Popular
