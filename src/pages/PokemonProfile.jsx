import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'
import {useParams} from "react-router-dom"

function PokemonProfile() {

  const {pokeName} = useParams()

  // hacer un estado para guardar el perfil del pokemon
  const [ pokeProfile, setPokeProfile ] = useState({})
  const [ isFetching, setIsFetching ] = useState(true)

  // el useEffect para hacer esto una vez
  useEffect(() => {
    getPokeProfile()
  }, [pokeName])

  const getPokeProfile = async () => {
    // axios para acceder a la data => el pokemon
    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    console.log(response.data)
    // necesitamos el nombre

    setPokeProfile(response.data)
    setIsFetching(false) // ya tenemos la info
  }

  // 4. Manejo de seccion de loading
  if (isFetching === true) {
    // si el componente está buscando data
    return <h3>... Loading</h3>
  }

  return (
    <div>
        <h3>PokemonProfile</h3>

        {/* renderizar el pokemon */}
        {pokeProfile.name}
        <img src={pokeProfile.sprites.other.home.front_default} alt="" />
    </div>
  )
}

export default PokemonProfile