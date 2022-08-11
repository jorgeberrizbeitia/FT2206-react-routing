import { useParams } from "react-router-dom"

function Profile() {

  // buscar informacion de un perfil en un Servidor
  // malva ? pablo ? rebeca
  // como yp accedo a ese parametro dinamico?

  // const algo = useParams()
  // console.log(algo)

  const { name } = useParams()


  return (
    <div>Perfil de {name}</div>
  )
}

export default Profile