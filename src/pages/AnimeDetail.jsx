import { Link, useParams } from "react-router-dom"
import Banner from "../components/Banner";
import { AnimeContext } from "../Context";
import { useContext, useEffect, useState } from "react";
import { api, get } from "../config/config";

function AnimeDetail() {
  // const [animes, handleNext, handlePrev, handleCategory, handleSearch, category, error] = useContext(AnimeContext);
  const [anime, setAnime] = useState();
  const { id } = useParams();

  // console.log(get(api.LIST))
  useEffect(() => {
    const getAnime = async () => {
      try{
            const response = await get(api.LIST+id);
            setAnime(await response.data.data);
            console.log(response);
      }catch(e){
        console.log(e.message);
      }
    }
    getAnime();
  }, [id])

  const bimg = anime?.attributes?.coverImage?.original || '' 
  return (  
    <>
    <header className="animedetail-header" style={{backgroundImage:`url(${bimg})`  }}>
      <Banner title={anime?.attributes?.titles?.en_jp}>
        <Link to="/animes" className="btn-primary">
          animes  
        </Link>
      </Banner>
    </header>
    </>
  )
}

export default AnimeDetail