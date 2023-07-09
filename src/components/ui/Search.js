import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Search = ({set, setQ, text, query}) => {
    // const [text, setText] = useState('')
    // const [query, setQuery] = useState('')
    const API_KEY = "117a1275a7795cc9963ca3459ea9c667";
    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
          )
          // const result = await axios(
          //   `https://breakingbadapi.com/api/characters?limit=28`
          // )
          console.log(result.data);
          
          set(result);
        }
        fetchItems()
      }, [query])
    //   const onChange = (q) => {
    //     setText(q);
    //     if(q !== ''){
    //     setQuery(q);}
        
    //   }
  return (
    <section className='search'>
      <form>
        <input
        type='text'
        className='form-control'
        placeholder='Search Movies'
        value={text}
        onChange={(e) => setQ(e.target.value)}
        autoFocus
        />
      </form>
    </section >
  )
}

export default Search
