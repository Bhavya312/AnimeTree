import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Generes from "../components/Generes";

export default function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Animes" subtile="Popular features">
          <Link to="/animes" className="btn-primary">
            Popular
          </Link>
        </Banner>
      </Hero>
      <Generes />
    </div>
  )
}
