import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function PokemonList() {

  // 1. crear estado para almacenar info
  const [allPokemons, setAllPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  // 2. useEffect (componentDidMount) para pedirle la informacion a la API
  useEffect(() => {
    getAllPokemons()
  }, [])
  
  // 3. function fetch/axios para traer info de una API (URL)
  const getAllPokemons = async () => {
    console.log("aqui vamos a traer los pokemons")
    // const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon")
    // const pokemonsJSON = await pokemons.json() 
    // console.log(pokemonsJSON)
    // setAllPokemons(pokemonsJSON.results)

    // podemos reemplazar esto con axios
    const response = await axios("https://pokeapi.co/api/v2/pokemon?limit=151")
    console.log(response.data) // SIEMPRE SERÁ .data
    setAllPokemons(response.data.results)
    setIsFetching(false) // ya tenemos la info
  }

  // 4. Manejo de seccion de loading
  if (isFetching === true) {
    // si el componente está buscando data
    return <h3>... Loading</h3>
  }

  return (
    <div>
      
      <h5>Lista de Pokemons</h5>

      {/* 5. renderizar la data vamos a hacer un .map */}
      {allPokemons.map((eachPokemon) => {
        return (
          <li>
            <Link to={`/poke-profile/${eachPokemon.name}`}>{eachPokemon.name}</Link>
          </li>
        )
      })}

    </div>
  )
}

export default PokemonList