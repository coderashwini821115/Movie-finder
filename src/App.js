import Header from './components/ui/header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';
import Popular from './components/ui/Popular';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import Genres from './components/ui/Genres';

const App=() => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [selectedGenres, setselectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  
  const set = (results) => {
    setItems(results.data);
      setisLoading(false)
  }
  const setQ = (q) => {
    setText(q);
    // if(q !== ''){
    setQuery(q);
  }
  return (
    <Router>
    <div className='container'>
      <Header />
      <Genres
   type='movie'
   selectedGenres={selectedGenres}
   setselectedGenres={setselectedGenres}
   genres={genres}
   setGenres={setGenres}
/>

      <Search set = {set} setQ={setQ} text={text} query={query}/>
      <Popular set={set} items={items} query={query} selectedGenres={selectedGenres}/>
      <CharacterGrid isLoading= {isLoading} items = {items} />
    </div>
    </Router>
  );
}

export default App;
