import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import { UserJwtContext } from '../contexts/UserJwtContext';


export function PokemonSearcher() {

  let [userJwt] = useContext(UserJwtContext);

  let { searchTerm } = useParams();

  // let [pokemonData, setPokemonData] = useState({});
  let [pokemonName, setPokemonName] = useState('');
  let [pokemonSpriteUrl, setPokemonSpriteUrl] = useState('');
  // let [pokemonId, setPokemonId] = useState(0);
  let [pokemonSearchTerm, setPokemonSearchTerm] = useState('');


  // Equivalient to componentDidMount
  useEffect(() => {
    console.log("Use effect says hello world!")

    if (searchTerm) {
      setPokemonSearchTerm(searchTerm);
      getSpecificPokemon(searchTerm);
    } else {
      getRandomPokemon();
    }

    // // Return inside useEffect is equivalent to componentWillUnmount
    // return (() => {
    //   console.log("Component is unmounting now.")
    // })
  }, []);

  // // Equivalient to componentDidUpdate
  // useEffect(() => {
  //   console.log("Use effect says hello world! Re-render")
  // });

  // // Equivalient to componentDidUpdate for a specific variable
  // useEffect(() => {
  //   console.log("Use effect says hello world! on update of PokemonName")
  // }, [pokemonName]);

  useEffect(() => {
    
    if (!userJwt && pokemonSearchTerm.length > 0) {
      setPokemonSearchTerm('');
      
    } else{
      // user is logged in and is allowed to search
    }
  }, [pokemonSearchTerm]);

  



  const getRandomPokemon = async () => {

    let randomPokemonId = Math.floor(Math.random() * 1025) + 1;
    console.log("Random Pokemon ID to get is: " + randomPokemonId);

    getSpecificPokemon(randomPokemonId);
    
  }

  const getSpecificPokemon = async (targetPokemonValue) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${targetPokemonValue}`);
    let data = await response.json();

    console.log(data);

    setPokemonName(data.name);
    setPokemonSpriteUrl(data.sprites.other.home.front_default);
    // setPokemonId(data.id);

    // setPokemonData((previousState) => {
    //   return {
    //     // Guarentee that the previous state is not lost
    //     ...previousState,
    //     // Overwrite the specific bits that we want to keep
    //     pokemonName: data.name,
    //     pokemonId: data.id,
    //     pokemonSpriteUrl: data.sprites.other.home.front_default
    //   }
    // });
  } 

  return (
    <>
        <h1>This is a function component</h1>

        <button onClick={getRandomPokemon}>
          Get a random Pokemon
        </button>

        <section>
          <label htmlFor="pokemonNameInput">Pokemon to search for: </label>
          <input 
            type="search" 
            name="pokemonNameInput" 
            id="pokemonNameInput" 
            value={pokemonSearchTerm}
            onChange={(event) => {
              setPokemonSearchTerm(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                getSpecificPokemon(pokemonSearchTerm);
              }
            }}
          />
          <button onClick={() => getSpecificPokemon(pokemonSearchTerm)}>
            Search!
          </button>
        </section>

        {pokemonName.length > 0 && 
        <h1>
          {pokemonName}
        </h1>
        }

        {pokemonSpriteUrl.length > 0 &&
          <img src={pokemonSpriteUrl} />
        }

      </>
    )
  }






