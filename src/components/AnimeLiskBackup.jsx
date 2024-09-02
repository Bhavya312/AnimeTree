import { useEffect, useState } from "react"
import { api, get } from "../config/config"
import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const AnimeList = () => {
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

  if(error) return( <h2>{error}</h2>);

  return (
    <>
    <section className="animelist">
      <div className="search-anime">
        <label htmlFor="anime">Search Anime</label>
        <input type="text" name="anime" placeholder="search" onChange={handleSearch}/>
      </div>

      <Box className="categories-anime">
        <FormControl sx={{minWidth:150}}>
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleCategory}
          >
            <MenuItem value="action">Action</MenuItem>
            <MenuItem value="romance">Romance</MenuItem>
            <MenuItem value="adventure">Adventure</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="animecards-center">
        {
          animes.length ?
          animes.map((anime) => (
            <Card sx={{ maxWidth: 345 }} key={anime.id} className="animecard">
              <CardMedia
                sx={{ height:350 }}
                image={anime.attributes.posterImage.medium}
                title={anime.attributes.titles.en}
              />
              <CardContent className="animecard-content">
                <Typography gutterBottom variant="h5" component="div">
                  {anime.attributes.titles.en_jp}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                  {anime.attributes.description.substr(0, 60)}...
                </Typography>
              </CardContent>
              <CardActions className="card-buttons">
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          ))
          : <h1>No Animes Found</h1>
        }
      </div>
      <Button onClick={handlePrev}>Prev</Button>
      <Button onClick={handleNext}>Next</Button>
    </section>
    </>
  )
}

export default AnimeList
