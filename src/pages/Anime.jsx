import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { AnimeContext } from '../context'

export default function Anime() {

  const context = useContext(AnimeContext);
  console.log(context);
  return (
    <React.Fragment>
      <Hero  hero="animesHero">
        <Banner title="Popular Animes">
          <Link to="/" className='btn-primary'>
            Home
          </Link>
        </Banner>
      </Hero>
      
    </React.Fragment>
  )
}
