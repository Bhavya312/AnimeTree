import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"

const PageNotFound = () => {
  return (
    <Hero  hero="animesHero">
        <Banner title="Page Not Found">
          <Link to="/" className='btn-primary'>
            Home
          </Link>
        </Banner>
      </Hero>
  )
}

export default PageNotFound