import React, { useEffect, useState } from "react";
import propTypes from 'prop-types';
import axios from "axios";
import instance from "./config/interceptor";
const AnimeContext = React.createContext();

AnimeProvider.propTypes = {
  children:propTypes.object,
}

export default function AnimeProvider({children}) {
  const BASE_URL = "https://kitsu.io/api/edge/anime";

  const [animes, setAnimes] = useState({});

  useEffect(() => {
      const fetchAnimes = () => {
        instance.get(BASE_URL)
              .then(data => {
                setAnimes(data.data);
              });
      }

      fetchAnimes();
  }, []);

  return (
    <AnimeContext.Provider
      value={{...animes}}
    >
      {children}
    </AnimeContext.Provider>
  )
}

const AnimeConsumer = AnimeContext.Consumer;

export {AnimeProvider, AnimeConsumer, AnimeContext}
