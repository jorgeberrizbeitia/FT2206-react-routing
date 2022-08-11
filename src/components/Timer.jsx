import { useState, useEffect } from "react"

function Timer(props) {

  const [timerValue, setTimerValue] = useState(0)

  useEffect(() => {
    console.log("El componente existe! yay (componentDidMount)")
    // inicia el timer (setInterval)
    
    const intervalId = setInterval(() => {
      // console.log("ha pasado 1 segundo", timerValue)
      // setTimerValue(timerValue + 1)
      setTimerValue((currentState) => {
        return currentState + 1
      })
    }, 1000)

    return () => {
      console.log("El componente dejo de existir :( (componentWillUnmount)")
      clearInterval(intervalId)
      console.log("el intervalo ha sido correctamente detenido")
    }

  }, []) // [] determina que esto se ejecuta solo una vez

  useEffect(() => {
    console.log("el estado timerValue ha cambiado")
    if (timerValue >= 10) {
      // si el timer llega a 10, entonces ocultalo/desaparece
      props.handleToggle()
    }
  }, [timerValue])

  return (
    <div>
      
      <h5>Timer: {timerValue}</h5>

    </div>
  )
}

export default Timer