import React from 'react';
import '../node_modules/bulma/css/bulma.css';
import './App.css';
import Character from './components/Character';
import {useState, useEffect} from "react";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      const fetchCharacters = async() => {
          const response = await axios.get(`https://swapi.dev/api/people/`);
          const data = await response.data.results;
          setCharacters(data)
      }
      fetchCharacters()
  }, [])

  console.log(characters)

  return (
    <div className="container is-fluid App">
      <h1 className="Header is-size-3">Characters</h1>
      <Character characters={characters} />
    </div>
  );
}

export default App;
