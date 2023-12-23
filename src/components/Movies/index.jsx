import { useEffect } from "react";
import { useState } from "react";

import MovieItem from "./../MovieItem";
import classes from "./Movies.module.css";

function Movies({ title, url }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Can not fetch movies");
        const resultObj = await resp.json();
        setMovies(resultObj.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMovies();
  }, []);

  const movieList = movies.map((movie) =>
    movie["backdrop_path"] ? (
      <MovieItem
        key={movie.id}
        title={movie.title}
        imageUrl={movie["backdrop_path"]}
      />
    ) : null
  );

  return (
    <div>
      {title && <h2 className={classes.title}>{title}</h2>}
      <div className={classes.movies}>{movieList}</div>
    </div>
  );
}

export default Movies;
