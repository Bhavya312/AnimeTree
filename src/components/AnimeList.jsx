import { useContext } from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { AnimeContext } from "../Context";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const [animes, handleNext, handlePrev, handleCategory, handleSearch, category, error] = useContext(AnimeContext);
  
  if(error) return (<h2>{error}</h2>)
  return (  
    <>
    <section className="animelist">
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
                <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                  <strong>Released:{anime.attributes.startDate}</strong>
                </Typography>
              </CardContent>
              <CardActions className="card-buttons">
                <Button size="small">
                  <Link to={`/animes/`+anime.id}>
                    Read More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          ))
          : 
          <h2>No Animes Found</h2>
        }
      </div>
      <div className="anime-pagination">
        <Button onClick={handlePrev} variant="outlined" className="page-link">Prev</Button>
        <Button onClick={handleNext} variant="outlined" className="page-link">Next</Button>
      </div>
    </section>
    </>
  )
}

export default AnimeList
