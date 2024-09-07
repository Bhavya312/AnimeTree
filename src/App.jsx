import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Anime from './pages/Anime'
import AnimeDetail from './pages/AnimeDetail'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animes/" element={<Anime />}></Route>
        <Route path="/animes/:id" element={<AnimeDetail />}></Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
