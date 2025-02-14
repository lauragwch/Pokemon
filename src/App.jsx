import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './Pages/HomePage'
import PokemonDetails from './Pages/PokemonDetails'
import NavBar from './Components/NavBar'
import PokemonByType from './Pages/PokemonByType'
import PokemonByGeneration from './Pages/PokemonByGeneration.jsx'
import PokemonByVersion from './Pages/PokemonByVersion.jsx'
import PokemonByHabitat from './Pages/PokemonByHabitat.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/pokemon/:name" element={<PokemonDetails/>} />
          <Route path="/type/:type" element={<PokemonByType />} />
          <Route path="/generation/:generation" element={<PokemonByGeneration />} />
          <Route path="/version/:version" element={<PokemonByVersion/>} />
          <Route path="/habitat/:habitat" element={<PokemonByHabitat/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
