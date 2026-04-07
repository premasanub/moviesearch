import { useState ,useEffect} from "react";
import { searchMovies } from "../api/omdb";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import "../Home.css";

function Home() {
  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const fetchMovies = async (newPage = 1,searchText=query) => {
    try {
      const data = await searchMovies(searchText, newPage, type);

      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
        setError("");
        setPage(newPage);

        //store
        localStorage.setItem("search",searchText);
        localStorage.setItem("page",newPage);
        localStorage.setItem("type",type);
        localStorage.setItem("results",JSON.stringify(data.Search));
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };



  
const loadFromLocalStorage =()=>{
const savedSearch =localStorage.getItem("search");
const savedPage =localStorage.getItem("page");
const savedType =localStorage.getItem("type");
const savedResults =localStorage.getItem("results");
if(savedSearch){
  setQuery(savedSearch);
  setPage(Number(savedPage) || 1);
  setMovies(JSON.parse(savedResults)||[]);
  setType(savedType || "");
}
};
useEffect(()=>{
  loadFromLocalStorage();
},[]);

 



  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(1);
  };

  const resetHome=()=>{
    localStorage.clear();
    setQuery("");
    setMovies([]);
    setPage(1);
    setType("");
  };

  return (
    <div className="container">
      {/* <h1>🎬 Movie Search App</h1> */}

 <button  onClick={resetHome}>🎬 Movie Search App</button>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>

        <button type="submit">Search</button>
      </form>

      {/* Error */}
      {error && <p>{error}</p>}

      {/* Movies */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalResults={totalResults}
        onPageChange={fetchMovies}
      />
    </div>
  );
}

export default Home;