import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          alt={movie.Title}
          style={{ width: "100%" }}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
