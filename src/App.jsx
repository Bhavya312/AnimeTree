import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Anime from './pages/Anime'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animes" element={<Anime />}></Route>
      </Routes>
    </>
  )
}

export default App
