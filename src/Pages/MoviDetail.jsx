import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/omdb";
import { useNavigate } from "react-router-dom";
function MovieDetails() {

const navigate =useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    
    fetchDetails();
  }, [id]);


const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        if (data.Response === "False") {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch {
        setError("Failed to load movie details");
      }
    };


  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;


  return (
    <div style={{ padding: "20px" }}>
      {/* <Link to="/">⬅ Back</Link> */}
      <button onClick={()=>navigate(-1)}>⬅ Back</button>

{/* <button
  onClick={() => {
    if (location.search) {
      navigate(`/${location.search}`);
    } else {
      navigate(-1);
    }
  }}
>
  🔙 Back
</button> */}


      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;