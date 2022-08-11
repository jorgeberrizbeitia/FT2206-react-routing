import { useState } from 'react'
import { useEffect } from 'react'

function PokemonList() {

  // crear estado para almacenar info
  const [allPokemons, setAllPokemons] = useState([])

  // useEffect (componentDidMount) para pedirle la informacion a la API
  useEffect(() => {
    getAllPokemons()
  }, [])

  const getAllPokemons = async () => {
    console.log("aqui vamos a traer los pokemons")
    // fetch para traer info de una API (URL)
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokemonsJSON = await pokemons.json()
    console.log(pokemonsJSON)
    setAllPokemons(pokemonsJSON.results)
  }


  // ???? accion misteriosa 

  return (
    <div>
      
      <h5>Lista de Pokemons</h5>

      {/* vamos a hacer un .map */}
      {allPokemons.map((eachPokemon) => {
        return <li>{eachPokemon.name}</li>
      })}

    </div>
  )
}

export default PokemonList