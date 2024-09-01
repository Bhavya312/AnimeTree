import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { AnimeContext } from '../context'
import AnimeContainer from '../components/AnimeContainer'

export default function Anime() {
  return (
    <React.Fragment>
      <Hero  hero="animesHero">
        <Banner title="Popular Animes">
          <Link to="/" className='btn-primary'>
            Home
          </Link>
        </Banner>
      </Hero>
      <AnimeContainer />
    </React.Fragment>
  )
}
