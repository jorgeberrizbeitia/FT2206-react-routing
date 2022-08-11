
// import './App.css';
// import { Routes, Route, Link } from "react-router-dom"

// import Home from "./pages/Home"
// import Profile from "./pages/Profile"
// import TimerControl from './pages/TimerControl';
// import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <div className="App">

//       <h3>Lifecycles y routing</h3>

//       {/* <TimerControl /> */}

//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/timer">Timer</Link>
//         <br />
//         <Link to="/profile/malva">Perfil de Malva</Link>
//         <Link to="/profile/pablo">Perfil de Pablo</Link>
//         <Link to="/profile/rebeca">Perfil de Rebeca</Link>
//       </nav>

//       <Routes>
//         {/* aqui iran todas las definiciones de nuestras rutas (accesos por URL) */}

//         <Route path="/" element={ <Home /> }/>
//         <Route path="/timer" element={ <TimerControl /> }/>
//         <Route path="/profile/:name" element={ <Profile /> }/>
//         <Route path="*" element={ <NotFound /> }/>

//       </Routes>

//     </div>
//   );
// }

// export default App;

import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import PokemonProfile from "./pages/PokemonProfile"
import NotFound from "./pages/NotFound"
import PokemonList from "./components/PokemonList"

function App() {
  return (
    <div className="App">
      
      <h3>Mi pagina de Pokemons</h3>

      <div id="poke-page">

        <PokemonList />

        <Routes>

          <Route path="/" element={ <Home /> }/>
          <Route path="/poke-profile/:pokeName" element={ <PokemonProfile /> }/>
          <Route path="*" element={ <NotFound /> }/>

        </Routes>

      </div>


    </div>
  )
}

export default App
