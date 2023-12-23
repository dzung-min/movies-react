import { IMG_URL_PREFIX } from "../../api";
import classes from "./MovieItem.module.css";

function MovieItem({ title, imageUrl, isUsingPoster }) {
  const movieClass = isUsingPoster
    ? `${classes.movie} ${classes.poster}`
    : `${classes.movie} ${classes.backdrop}`;
  return (
    <div className={movieClass}>
      <img src={`${IMG_URL_PREFIX}${imageUrl}`} alt={title} />
    </div>
  );
}

export default MovieItem;
