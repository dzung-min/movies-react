import { useState } from "react";
import { useEffect } from "react";

import classes from "./Banner.module.css";
import api, { IMG_URL_PREFIX } from "../../api";
import MovieItem from "../MovieItem";

export default function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getRandomMovie() {
      try {
        const resp = await fetch(api.fetchNetflixOriginals);
        if (!resp.ok) throw new Error("Can not fetch movies");
        const data = await resp.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getRandomMovie();
  }, []);

  const randomMovie = movies[Math.floor(Math.random() * movies.length - 1)];

  const originalNetflixTvSeriesList = movies.map((movie) => {
    return (
      <MovieItem
        key={movie.id}
        title={movie.title}
        imageUrl={movie.poster_path}
        isUsingPoster={true}
      />
    );
  });

  return randomMovie ? (
    <>
      <div className={classes.banner}>
        <div className={classes.image}>
          <img
            src={`https://image.tmdb.org/t/p/original${randomMovie["backdrop_path"]}`}
            alt={randomMovie.name}
          />
        </div>
        <div className={classes.actions}>
          <h1>{randomMovie.name}</h1>
          <div>
            <button>Play</button>
            <button>My List</button>
          </div>
          <p>{randomMovie.overview.slice(0, 120) + "..."}</p>
        </div>
      </div>
      <div className={classes.movies}>{originalNetflixTvSeriesList}</div>
    </>
  ) : null;
}
