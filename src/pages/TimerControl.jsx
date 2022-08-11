import { useState } from "react"
import Timer from '../components/Timer'

function TimerControl() {

  const [isTimerShowing, setIsTimerShowing] = useState(false)

  const handleToggle = () => setIsTimerShowing(!isTimerShowing)

  return (
    <div>

      <h4>TimerControl</h4>

      <button onClick={handleToggle}>{isTimerShowing ? "Ocultar" : "Mostrar"} Timer</button>

      {isTimerShowing === true && <Timer handleToggle={handleToggle}/>}

    </div>
  )
}

export default TimerControl