import React, { useEffect, useState } from "react";
import propTypes from 'prop-types';
import { api, get } from "./config/config";
const AnimeContext = React.createContext();

AnimeProvider.propTypes = {
  children:propTypes.object,
}

export default function AnimeProvider({children}) {
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState('');
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getAnime = async () => {
      try{
          var params = {'page[number]':count};
          if(category) { params = {...params, 'filter[categories]':category}}
          if(search) { params = {...params, 'filter[text]':search} }

          const response = await get(api.LIST, {params:params});
        setAnimes(response.data.data);
      }catch(e){
        setError(e.message);
      }
    }
    getAnime();
  }, [count, search, category])

  const handlePrev = () => {
    if(count !== 1) setCount(count - 1);
  }

  const handleNext = () => {
    setCount(count + 1);
  }

  const handleSearch = (e) => {
      setTimeout(() => {
        setSearch(e.target.value)
      }, 2500)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <AnimeContext.Provider
      value={[animes, handleNext, handlePrev, handleCategory, handleSearch, category]}
    >
      {children}
    </AnimeContext.Provider>
  )
}

const AnimeConsumer = AnimeContext.Consumer;

export {AnimeProvider, AnimeConsumer, AnimeContext}
