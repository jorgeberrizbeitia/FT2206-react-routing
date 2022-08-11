import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div>
      <p>NotFound, usuario perdido 404</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound