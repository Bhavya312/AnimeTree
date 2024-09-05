import { useContext } from "react";
import AnimeFilter from "./AnimeFilter";
import AnimeList from "./AnimeList";
import { AnimeContext } from "../Context";

export default function AnimeContainer() {
  const [animes, handleNext, handlePrev, handleCategory, handleSearch, category, error] = useContext(AnimeContext);

  return (
    <>
      <AnimeFilter handleCategory={handleCategory} handleSearch={handleSearch} category={category}/>
      <AnimeList />
    </>
  )
}
