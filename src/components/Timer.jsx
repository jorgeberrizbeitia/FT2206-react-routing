import { useState, useEffect } from "react"

function Timer() {

  const [timerValue, setTimerValue] = useState(0)
  useEffect(() => {
    console.log("El componente existe! yay (componentDidMount)")
    // inicia el timer (setInterval)
    
    setInterval(() => {
      console.log("ha pasado 1 segundo", 0)
      // setTimerValue(0 + 1)
      setTimerValue((currentState) => {
        return currentState + 1
      })

    }, 1000)


    return () => {
      console.log("El componente dejo de existir :( (componentWillUnmount)")
    }

  }, []) // [] determina que esto se ejecuta solo una vez

  return (
    <div>
      
      <h5>Timer: {timerValue}</h5>

    </div>
  )
}

export default Timer