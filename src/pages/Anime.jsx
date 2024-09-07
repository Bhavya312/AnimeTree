import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import AnimeContainer from '../components/AnimeContainer'

export default function Anime() {
  return (
    <>
      <Hero  hero="animesHero">
        <Banner title="Popular Animes">
          <Link to="/" className='btn-primary'>
            Home
          </Link>
        </Banner>
      </Hero>
      <AnimeContainer />
    </>
  )
}
