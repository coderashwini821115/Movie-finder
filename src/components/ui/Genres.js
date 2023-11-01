import axios from 'axios'
import React, { useEffect } from 'react'
import { Chip } from '@mui/material';
const Genres = ({type, selectedGenres, setselectedGenres, genres, setGenres}) => {
    const handleAdd = (genre) => {
        setselectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
    }
    const handleRemove = (genre) => {
        setselectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
        setGenres([...genres, genre]);
    }
    const fetchGenres = async() => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=117a1275a7795cc9963ca3459ea9c667&language=en-US`
        );
        // console.log(data);
        setGenres(data.genres);
    };
    console.log(genres);
    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        }
    }, []);
  return (
    
    <div style={{padding: '6px 0'}}>
        {
        selectedGenres.map((genre) => (
            <Chip label={genre.name} style={{margin: 2}} size = 'small' color='primary' clickable key={genre.id}
            onDelete={() => handleRemove(genre)}
            />
        ))}
        { genres.length > 0 && 
        genres.map((genre) => (
            <Chip label={genre.name} style={{margin: 2, background:'#999966'}} size = 'small' clickable key={genre.id} 
            onClick={() => handleAdd(genre)}
            />
        ))}
    </div>
    
  )
}

export default Genres
