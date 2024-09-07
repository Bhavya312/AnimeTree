import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import { api, get } from "../config/config";
import defaultImg from "../assets/NoImageFound.jpg.png";
function AnimeDetail() {
  const [anime, setAnime] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await get(api.LIST + id);
        setAnime(await response.data.data);
      } catch (e) {
        setError(e.message);
      }
    };
    getAnime();
  }, [id]);

  const bimg = anime?.attributes?.coverImage?.large || defaultImg;

  if (error) return <h2>{error}</h2>;
  return (
    <>
      <header
        className="animedetail-header"
        style={{ backgroundImage: `url(${bimg})` }}
      >
        <Banner
          title={
            anime?.attributes?.titles?.en_jp
              ? anime?.attributes?.titles?.en_jp
              : anime?.attributes?.titles?.en_us
          }
        >
          <Link to="/animes" className="btn-primary">
            animes
          </Link>
        </Banner>
      </header>
      <section className="single-anime">
        <div className="single-anime-info">
          <article className="desc">
            <h3>details</h3>
            <p>
              {anime?.attributes?.description.replace(
                "[Written by MAL Rewrite]",
                ""
              )}
            </p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>
              Age Rating: {anime?.attributes?.ageRatingGuide} (
              {anime?.attributes?.ageRating})
            </h6>
            <h6>episodes: {anime?.attributes?.episodeCount}</h6>
            <h6>
              Type: {anime?.attributes?.showType}
              {/* {capacity > 1 ? `${capacity} people` : `${capacity} person`} */}
            </h6>
            <h6>Status: {anime?.attributes?.status}</h6>
          </article>
        </div>
      </section>
    </>
  );
}

export default AnimeDetail;
