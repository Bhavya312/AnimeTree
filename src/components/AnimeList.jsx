import { useEffect } from "react"
import { api, get } from "../config/config"

const AnimeList = () => {

  const getAnime = async () => {
    try{
       const response = await get(api.LIST);
       console.log(response);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    getAnime();
  }, [])
  
  return (
    <div>AnimeList</div>
  )
}

export default AnimeList
