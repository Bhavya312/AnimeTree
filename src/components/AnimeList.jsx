import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  // Pagination,
  Typography,
} from "@mui/material";
// import { AnimeContext } from "../Context";
import { Link } from "react-router-dom";
import moment from "moment";
import { api, get } from "../config/config";
import AnimeFilter from "./AnimeFilter";

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  // const [page, setPage] = useState(1);
  // const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getAnime = async () => {
      try {
        var params = { "page[number]": count };
        if (category) {
          params = { ...params, "filter[categories]": category };
        }
        if (search) {
          params = { ...params, "filter[text]": search };
        }
        const response = await get(api.LIST, { params: params });
        setAnimes(response.data.data);
      } catch (e) {
        setError(e.message);
      }
    };
    getAnime();
  }, [count, search, category]);

  const handlePrev = () => {
    if (count !== 1) setCount(count - 1);
  };

  const handleNext = () => {
    setCount(count + 1);
  };

  const handleSearch = (value) => {
    setTimeout(() => {
      setSearch(value);
    }, 2500);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // const handlePage = (event, v) => {
  //   if (offset > 0) {
  //     console.log(v > page ? 10 * v : 10 / v);
  //     setOffset((offset) => (v > page ? 10 * v : 10 / v));
  //   } else {
  //     console.log(v > page ? 10 * v : offset);
  //     setOffset((offset) => (v > page ? 10 * v : offset));
  //   }
  //   setPage(v);
  // };

  if (error) return <h2>{error}</h2>;
  return (
    <>
      <AnimeFilter
        handleCategory={handleCategory}
        handleSearch={handleSearch}
        category={category}
      />
      <section className="animelist">
        <div className="animecards-center">
          {animes.length ? (
            animes.map((anime) => (
              <Card sx={{ maxWidth: 345 }} key={anime.id} className="animecard">
                <CardMedia
                  sx={{ height: 350 }}
                  image={anime.attributes.posterImage.medium}
                  title={anime.attributes.titles.en}
                />
                <CardContent className="animecard-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {anime.attributes.titles.en_jp
                      ? anime.attributes.titles.en_jp
                      : anime.attributes.titles.en_us}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {anime.attributes.description.substr(0, 60)}...
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>
                      Released:{" "}
                      {anime.attributes.startDate
                        ? moment(anime.attributes.startDate).format(
                            "Do MMM YYYY"
                          )
                        : ""}
                    </strong>
                  </Typography>
                </CardContent>
                <CardActions className="card-buttons">
                  <Button size="small">
                    <Link className="read-more" to={`/animes/` + anime.id}>
                      Read More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <h2>No Animes Found</h2>
          )}
        </div>
        <div className="anime-pagination">
          <Button onClick={handlePrev} variant="outlined" className="page-link">
            Prev
          </Button>
          <Button onClick={handleNext} variant="outlined" className="page-link">
            Next
          </Button>
        </div>
      </section>
    </>
  );
};

export default AnimeList;
