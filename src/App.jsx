import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './Pages/HomePage'
import PokemonDetails from './Pages/PokemonDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/pokemon/:name" element={<PokemonDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
